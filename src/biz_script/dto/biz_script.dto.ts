import {ObjectType, Field, ID,Directive} from "@nestjs/graphql";



@ObjectType() 
@Directive('@key(fields: "_id")')
export class EmployeeType {
    @Field(()=> ID)
    _id: string;

    @Field()
    parent_id : String;
    @Field()
    description : String;
    @Field()
    messages : String[];

};