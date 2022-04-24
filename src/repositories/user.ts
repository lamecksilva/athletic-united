import { IUser, User } from '../models/User';

export async function createUser(data: Partial<IUser>) {
	const user = await new User(data).save();

	return user.toObject();
}

export async function findUserById(id: string) {
	const user = await User.findOne({ _id: id });

	return user;
}

export async function findUserByEmail(email: string) {
	const user = await User.findOne({ email });

	return user;
}
