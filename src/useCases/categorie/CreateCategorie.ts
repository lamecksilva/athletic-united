import { ICategorie } from '../../models/Categorie';
import { createCategorie } from '../../repositories/categorie';

export async function CreateCategorie(data: Partial<ICategorie>) {
	const categorie = await createCategorie(data);

	return categorie;
}
