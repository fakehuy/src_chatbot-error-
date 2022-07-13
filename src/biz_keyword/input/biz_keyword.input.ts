import {Field,  InputType} from "@nestjs/graphql";


@InputType() 
export class EmployeeInput {
    @Field()
    keyword : String[];
    @Field()
    script_id : String;
};