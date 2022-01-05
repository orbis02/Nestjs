import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TasksController } from './tasks/tasks.controller';
// import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/config';
import { ProductoModule } from './producto/producto.module';
import { EmployeeModule } from './employee/employee.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
// import { TaskService } from './task/task.service';
// import { TaskController } from './task/task.controller';
import { MeetingModule } from './meeting/meeting.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TasksModule,
    MongooseModule.forRoot('mongodb://localhost/nest-tutorial1'),
    ConfigModule.forRoot({
      isGlobal:true
    }),
    
    TypeOrmModule.forRootAsync({
   
      useFactory: (configservice: ConfigService) => ({
        type: 'mysql' as 'mysql',
        host:  configservice.get<string>(DB_HOST),
        port: configservice.get<number>(DB_PORT),
        username: configservice.get<string>(DB_USER),
        password: configservice.get<string>(DB_PASSWORD),
        database: configservice.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,//para activar las migraciones completas..
        logging:true, //para mostrar por consola todas las operaciones efectudas en la base de datos..
        migrations: ["dist/migrations/*{.ts,.js}"],
        migrationsTableName: "migrations_typeorm",
        migrationsRun: false
      }),
      inject:[ConfigService],
      
    }),
    
    ProductoModule,
    
    EmployeeModule,
    
    ContactInfoModule,
    
    TaskModule,
    
    MeetingModule,
    
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
