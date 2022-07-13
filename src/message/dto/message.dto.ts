import {ObjectType, Field, ID,Directive} from "@nestjs/graphql";



@ObjectType() 
@Directive('@key(fields: "_id")')
export class EmployeeType {
    @Field(()=> ID)
    _id: string;

    @Field()
    sender : String;
    @Field()
    type : String;
    @Field()
    content : String;
    @Field()
    time : String;

};