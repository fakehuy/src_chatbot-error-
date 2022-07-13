import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from './user.resolver';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [  
    JwtModule.register({
      secret: 'supper-secret'
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [UsersResolver,UsersService],
  exports: [UsersService]
})
export class UsersModule {}
