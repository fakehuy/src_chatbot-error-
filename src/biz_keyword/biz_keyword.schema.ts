import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Biz_script } from '../biz_script/biz_script.schema';


export type Biz_keywordDocument = Biz_keyword & Document;



@Schema({collection:"biz_keyword"})
export class Biz_keyword {
    @Prop()
    keyword : String[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Biz_script' ,require:true, unique:true})
    script_id : Biz_script;
}



export const Biz_keywordSchema = SchemaFactory.createForClass(Biz_keyword);


