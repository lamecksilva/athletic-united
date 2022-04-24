// @ts-expect-error TS7016
import * as mockingoose from 'mockingoose';
import { User } from '../../../models/User';
import { CreateUser } from '../CreateUser';

describe('CreateUser useCase', () => {
	it('should throw a password not found error', async () => {
		const _user = {
			name: 'Lameck Sandro',
			email: 'lameck@example.com',
		};

		await expect(CreateUser(_user)).rejects.toThrow('Senha não fornecida');
	});

	it('should throw a email not found error', async () => {
		const _user = {
			name: 'Lameck Sandro',
			password: 'abc@123',
		};

		await expect(CreateUser(_user)).rejects.toThrow('Email não fornecido');
	});

	it('should throw a error of email found in database', async () => {
		const _user = {
			name: 'Lameck Sandro',
			password: 'abc@123',
			email: 'lameck@example',
		};

		mockingoose(User).toReturn({ ..._user }, 'findOne');

		await expect(CreateUser(_user)).rejects.toThrow(
			'Endereço de e-mail já cadastrado'
		);
	});
});
