import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { JwtModule } from '@nestjs/jwt';
import { EXPIRES_IN, JWT_KEY } from 'src/auth/constants/jwt.constants';

@Module({
  imports: [TypeOrmModule.forFeature([Provider])],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
