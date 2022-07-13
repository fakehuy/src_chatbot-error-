import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Biz_scriptsModule } from './biz_script/biz_script.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Biz_conversationsModule } from './biz_conversation/biz_conversation.module';
import { Biz_keywordsModule } from './biz_keyword/biz_keyword.module';
import { ParticipantModule } from './participant/participant.module';
import { MessagesModule } from './message/message.module';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ait-training:ait-training@training-internship.ddcr4bx.mongodb.net/?retryWrites=true&w=majority') ,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    UsersModule,
    Biz_conversationsModule,
    Biz_keywordsModule,
    Biz_scriptsModule,
    ParticipantModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
