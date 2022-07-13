import {ObjectType, Field, ID,Directive} from "@nestjs/graphql";



@ObjectType() 
@Directive('@key(fields: "_id")')
export class EmployeeType {
    @Field(()=> ID)
    _id: string;

    @Field()
    description : String;
    @Field()
    status : String;
    @Field()
    participants : String[];
    @Field()
    messages : String[];

};