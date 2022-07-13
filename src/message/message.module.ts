import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesResolver } from './message.resolver';
import { MessageSchema } from './message.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Messages', schema: MessageSchema }])],
    providers: [MessagesResolver],
})
export class MessagesModule {}
