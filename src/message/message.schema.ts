import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';


export type MessageDocument = Message & Document;



@Schema({collection:"messages"})
export class Message {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,require:true, unique:true})
    sender : User;
    @Prop()
    type : String;
    @Prop({require:true})
    content : String;
    @Prop()
    time : String;
}



export const MessageSchema = SchemaFactory.createForClass(Message);


