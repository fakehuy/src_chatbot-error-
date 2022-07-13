import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Biz_keywordsResolver } from './biz_keyword.resolver';
import { Biz_keywordSchema } from './biz_keyword.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Biz_keywords', schema: Biz_keywordSchema }])],
    providers: [Biz_keywordsResolver],
})
export class Biz_keywordsModule {}
