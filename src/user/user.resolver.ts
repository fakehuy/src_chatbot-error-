import { Resolver,Query,Mutation, Args } from "@nestjs/graphql";
import { Get } from '@nestjs/common';
import { UserInput } from './input/user.input';
import { UsersService } from './user.service';
import {  UserType } from './dto/create-user.dto';  
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { User } from "./user.schema";


// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.


const saltOrRounds = 10;



@Resolver('user')
export class UsersResolver { 
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}


    
    @Query(() => [UserType])
    async user() {
        return this.usersService.findAll();
    }



    @Mutation(()=> UserType)
    async oneUserById(@Args('id') id: string){
        return this.usersService.findOne(id);
    }

    @Mutation(()=> UserType)
    async RemoveUser(@Args('id') id: string){
        return this.usersService.findAndRemove(id);
    }

    @Get(':id')
    @Mutation(()=> UserType)
    async UpdateUser(@Args('id') id: string, @Args('name') name:string, @Args('password')password: string, @Args('email')email: string){
        return this.usersService.findAndUpdate(id,name,password,email);
    }



    // @UseGuards(AuthGuard('local'))
    @Mutation(()=> UserType , { nullable: true })
    async login(@Args('email') email: string, @Args('password') password: string) : Promise<any> {
        
        let result = await this.usersService.confirmUser({ username: email, password });
        if (!result) {
            throw new Error(
                "Không đúng mật khẩu hoặc không có tài khoản"
            ); 
        }
        return result;
    }

    async verify(@Args('access_token') access_token : string) : Promise<User | null> {
        return this.decode(access_token);
    }

    // createUser
    @Mutation(() =>  UserType , { nullable: true } )
    async register( @Args('username') username:string, @Args('password') password: string, @Args('name') name:string, @Args('email') email: string) : Promise<any> {
        let result = await this.usersService.findOneByUserName(username);
        if (result !== null) {
            throw new Error(
                "tên đăng nhập đã có tài khoản"
              ); 
        }    
        result = await this.usersService.findOneByEmail(email);
        if (result !== null) {
            throw new Error(
                "mail đã đc đăng kí"
              ); 
        }
        password = await this.encodePwd(password);
        const input : UserInput = {
            "name": name,
            "username": username,
            "password": password ,
            "email": email,
        }
        return this.usersService.create(input);
    }
    

    encode(user: any) : any {
        const payload = { "_id": user._id + "", "username": user.username + "", "name": user.name + "", "email": user.email + "" };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    decode(access_token : string) :  any {
        const decoded = this.jwtService.verify(access_token, {
        secret: 'supper-secret'
        });
        return decoded
    }

    async encodePwd(password: string) : Promise<string> {
        return await bcrypt.hash(password, saltOrRounds);
    }


}