import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

// );

@Schema({collection:'sys_user'})
export class User {
  @Prop()
  username : String;

  @Prop()
  password: String;

  @Prop()
  name : String;

  @Prop()
  email: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
