import {ObjectType, Field, Int, InputType,ID} from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";


@InputType() 
export class UserInput {

    @Prop({require:true, unique:true})
    @Field()
    readonly username: string;
    @Prop({require:true})
    @Field()
    readonly password: string;
    @Prop({require:true, unique:true})
    @Field()
    readonly name: string;
    @Prop({require:true, unique:true})
    @Field()
    readonly email: string;
};


@InputType() 
export class LoginInput {
    @Field()
    readonly email: string;
    @Field()
    readonly password: string;
};

