import { model, Schema } from 'mongoose';

export interface ICategorie {
	_id?: string;
	name: string;
	avatar?: string;
	createdAt: Date | string;
	updatedAt: Date | string;
}

const userSchema = new Schema<ICategorie>(
	{
		name: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Categorie = model<ICategorie>('Categorie', userSchema);
