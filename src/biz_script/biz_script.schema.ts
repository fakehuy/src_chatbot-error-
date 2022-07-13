import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Message } from '../message/message.schema';


export type Biz_scriptDocument = Biz_script & Document;



@Schema({collection:"biz_script"})
export class Biz_script {
    @Prop()
    parent_id : String;
    @Prop()
    description : String;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Message' ,require:true, unique:true})
    messages : Message[];
}



export const Biz_scriptSchema = SchemaFactory.createForClass(Biz_script);


