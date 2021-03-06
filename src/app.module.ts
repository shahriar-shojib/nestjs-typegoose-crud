import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PatientModule } from './patient/patient.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypegooseModule.forRoot(process.env.MONGODB_URL, {
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		}),
		PatientModule,
	],
})
export class AppModule {}
