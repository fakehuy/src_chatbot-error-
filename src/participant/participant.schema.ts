import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';


export type ParticipantDocument = Participant & Document;



@Schema({collection:"participants"})
export class Participant {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,require:true, unique:true})
    user : User;
}



export const ParticipantSchema = SchemaFactory.createForClass(Participant);
