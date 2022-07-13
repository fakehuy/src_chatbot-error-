import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParticipantResolver } from './participant.resolver';
import { ParticipantSchema } from './participant.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Participants', schema: ParticipantSchema }])],
    providers: [ParticipantResolver],
})
export class ParticipantModule {}
