import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInput } from './input/user.input';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';


@Injectable()
export class UsersService {

  constructor(@InjectModel("User") private readonly usersModel: Model<UserDocument>) {}

  async create(createUser: UserInput): Promise<User> {
    const createdUser = new this.usersModel(createUser);
    return await createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return await this.usersModel.find().exec();
  }
  async findOne(id: string): Promise<User> {
    return await this.usersModel.findOne({_id:id}).exec();
  }
  async findAndRemove(id: string): Promise<User> {
    return await this.usersModel.findByIdAndRemove({_id:id}).exec();
  }

  async findAndUpdate(id: string, name: string, password : string, email: string): Promise<User> {
    await this.usersModel.findByIdAndUpdate({_id:id},{email:email}).exec();
    await this.usersModel.findByIdAndUpdate({_id:id},{password:password}).exec();
    return await this.usersModel.findByIdAndUpdate({_id:id},{name:name}).exec();
  }

  async findOneByUserName(username: string): Promise<any> {
    return await this.usersModel.findOne({username:username}).exec();
  }

  async findOneByEmail(username: string): Promise<any> {
    return await this.usersModel.findOne({email:username}).exec();
  }

  async confirmUser({ username, password }): Promise<any> {
    const user = await this.usersModel.findOne({ $or:[{email:username},{username:username}]}).exec();
    if (!user) {
      return null
    }
    const isMatch = await bcrypt.compare(password, user.password.toString());
    if (!isMatch){
      return null;
    }
    return user;
  }


  
} 




