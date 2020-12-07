import { prop } from '@typegoose/typegoose';

export class Patient {
	@prop({ required: true })
	name: string;
	@prop({ required: true })
	age: number;
	@prop({ required: true })
	location: string;
}
