// @ts-expect-error TS7016
import * as mockingoose from 'mockingoose';
import { Types } from 'mongoose';
import { Categorie } from '../../../models/Categorie';
import { CreateCategorie } from '../CreateCategorie';

describe('CreateCategorie useCase', () => {
	it('should create a categorie', async () => {
		const _categorie = {
			name: 'BodyBuilding',
		};

		mockingoose(Categorie).toReturn(
			{ ..._categorie, _id: new Types.ObjectId() },
			'save'
		);

		const result = await CreateCategorie({ ..._categorie });

		expect(JSON.parse(JSON.stringify(result))).toMatchObject({
			..._categorie,
		});
	});
});
