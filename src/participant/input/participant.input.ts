import {Field,  InputType} from "@nestjs/graphql";


@InputType() 
export class EmployeeInput {
    @Field()
    user : String[];
};