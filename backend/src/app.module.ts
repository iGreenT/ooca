import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from "./users/entities/users.entity"
import { Company } from "./companies/entities/company.entity"
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProvidersModule } from './providers/providers.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { Provider } from './providers/entities/provider.entity';
import { Appointment } from './appointments/entities/appointment.entity';
import { UserTypesModule } from './user_types/user_types.module';
import { UserType } from './user_types/entities/user_type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'ooca_test',
      entities: [
        Users,
        Company,
        Provider,
        Appointment,
        UserType],
      migrations: ["./migrations/**/*.ts"],
      synchronize: true,

    }),
    UsersModule,
    CompaniesModule,
    ProvidersModule,
    AppointmentsModule,
    UserTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

