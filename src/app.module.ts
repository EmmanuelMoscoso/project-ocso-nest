import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';
import { ManagersModule } from './managers/managers.module';
import { LocationsModule } from './locations/locations.module';
import { RegiosModule } from './regios/regios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.host,
    port: +(process.env.port || 5432),
    username: 'postgres',
    password: process.env.password,
    database: process.env.name,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }),
    EmployeesModule, ProductsModule, ProvidersModule, ManagersModule, LocationsModule, RegiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
