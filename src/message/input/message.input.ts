import {Field,  InputType} from "@nestjs/graphql";


@InputType() 
export class EmployeeInput {
    @Field()
    sender : String;
    @Field()
    type : String;
    @Field()
    content : String;
    @Field()
    time : String;
};