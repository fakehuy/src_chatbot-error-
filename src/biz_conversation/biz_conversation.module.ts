import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Biz_conversationsResolver } from './biz_conversation.resolver';
import { Biz_conversationSchema } from './biz_conversation.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Biz_conversations', schema: Biz_conversationSchema }])],
    providers: [Biz_conversationsResolver],
})
export class Biz_conversationsModule {}
