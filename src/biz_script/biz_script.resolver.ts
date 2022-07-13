import { Resolver,Query,Mutation, Args,ResolveReference, Parent,ResolveField } from "@nestjs/graphql";
import { Get } from '@nestjs/common';



@Resolver()
export class Biz_scriptsResolver {
    // constructor(
    //     private readonly employeesService: EmployeesService,
    // ) {}


    @Query(() => String)
    async hello() {
        return "Hi";
    }    
    

    
}