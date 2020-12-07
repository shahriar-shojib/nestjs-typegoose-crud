export type PatientDTO = {
	readonly name: string;
	readonly age: number;
	readonly location: string;
};

export interface IUpdateRequest {
	patientID: string;
	updatedValues: Record<string, unknown>;
}
