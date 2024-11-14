import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './tasks/task.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/task-manager'),


    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
