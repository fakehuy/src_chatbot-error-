import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Biz_scriptsResolver } from './biz_script.resolver';
import { Biz_scriptSchema } from './biz_script.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Biz_scripts', schema: Biz_scriptSchema }])],
    providers: [Biz_scriptsResolver],
})
export class Biz_scriptsModule {}
