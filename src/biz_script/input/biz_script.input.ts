import {Field,  InputType} from "@nestjs/graphql";


@InputType() 
export class EmployeeInput {
    @Field()
    parent_id : String;
    @Field()
    description : String;
    @Field()
    messages : String[];
};