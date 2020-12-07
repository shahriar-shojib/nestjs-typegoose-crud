import { Controller, Get, Post, Body } from '@nestjs/common';
import { IUpdateRequest, PatientDTO } from './patient.dto';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Controller('/test')
export class PatientController {
	constructor(private readonly patientService: PatientService) {}

	@Post('/update')
	async UpdatePatient(@Body() body: IUpdateRequest): Promise<Patient> {
		return await this.patientService.updateUser(body);
	}

	@Get('/patients')
	async getCats(): Promise<Patient[] | null> {
		return await this.patientService.findAll();
	}

	@Post('/create')
	async create(@Body() patientInfo: PatientDTO): Promise<Patient> {
		return await this.patientService.create(patientInfo);
	}
}
