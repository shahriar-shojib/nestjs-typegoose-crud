import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

@Module({
	imports: [TypegooseModule.forFeature([Patient])],

	controllers: [PatientController],
	providers: [PatientService],
})
export class PatientModule {}
