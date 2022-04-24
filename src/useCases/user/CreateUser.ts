import { hash } from 'bcrypt';
import { IUser } from '../../models/User';
import { createUser, findUserByEmail } from '../../repositories/user';
import { InternalError } from '../../utils/errors/internal-error';

export async function CreateUser(data: Partial<IUser>) {
	if (!data?.password) {
		throw new InternalError('Senha não fornecida', 400);
	}
	if (!data?.email) {
		throw new InternalError('Email não fornecido', 400);
	}

	const existsUser = await findUserByEmail(data?.email);

	if (existsUser) {
		throw new InternalError('Endereço de e-mail já cadastrado', 400);
	}

	const hashedPassword = await hash(data?.password, 10);

	const createdUser = await createUser({ ...data, password: hashedPassword });

	return createdUser;
}
