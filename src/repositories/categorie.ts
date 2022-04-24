import { Categorie, ICategorie } from '../models/Categorie';

export async function createCategorie(data: Partial<ICategorie>) {
	const categorie = await new Categorie(data).save();

	return categorie.toObject();
}

export async function findCategoriesByName(name: string) {
	const categorie = await Categorie.find({ name: new RegExp(name, 'i') });

	return categorie;
}

export async function findCategorieById(id: string) {
	const categorie = await Categorie.findOne({ _id: id });

	return categorie;
}
