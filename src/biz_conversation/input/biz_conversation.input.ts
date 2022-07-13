import {Field,  InputType} from "@nestjs/graphql";


@InputType() 
export class EmployeeInput {
    @Field()
    description : String;
    @Field()
    status : String;
    @Field()
    participants : String[];
    @Field()
    messages : String[];
};