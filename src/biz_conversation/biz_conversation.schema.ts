import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Message } from 'src/message/message.schema';
import { User } from 'src/user/user.schema';

export type Biz_conversationDocument = Biz_conversation & Document;



@Schema({collection:"biz_conversation"})
export class Biz_conversation {
    @Prop()
    description : String;
    @Prop()
    status : String;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,require:true, unique:true})
    participants : User[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Message' ,require:true, unique:true})
    messages : Message[];
}



export const Biz_conversationSchema = SchemaFactory.createForClass(Biz_conversation);


