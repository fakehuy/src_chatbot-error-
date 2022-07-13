import {ObjectType, Field, Int, ID,Directive} from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";


@ObjectType() 
@Directive('@key(fields: "_id")')
export class UserType {
    @Field(()=> ID)
    _id: string;

    @Prop({require:true, unique:true})
    @Field()
    readonly username: string;  

    @Prop({require:true})  
    @Field()
    readonly password: string;

    @Prop({require:true})
    @Field()
    readonly name: string;

    @Prop({require:true, unique:true})
    @Field()
    readonly email: string;

};

