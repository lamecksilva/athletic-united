import { model, Schema } from 'mongoose';

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	password: string;
	avatar?: string;

	createdAt: Date | string;
	updatedAt: Date | string;
}

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
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

export const User = model<IUser>('User', userSchema);
