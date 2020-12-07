import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Patient } from './patient.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { IUpdateRequest, PatientDTO } from './patient.dto';

@Injectable()
export class PatientService {
	constructor(@InjectModel(Patient) private readonly PatientModel: ReturnModelType<typeof Patient>) {}

	async create(patientInfo: PatientDTO): Promise<Patient> {
		const createdCat = new this.PatientModel(patientInfo);
		return await createdCat.save();
	}

	async findAll(): Promise<Patient[] | null> {
		return await this.PatientModel.find().exec();
	}
	async updateUser(body: IUpdateRequest): Promise<Patient> {
		const doc = await this.PatientModel.findOne({ _id: body.patientID }).exec();

		for (const key in body.updatedValues) {
			doc[key] = body.updatedValues[key];
		}

		return await doc.save();
	}
}
