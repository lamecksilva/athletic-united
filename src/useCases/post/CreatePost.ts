import { IPost } from '../../models/Post';
import { createPost } from '../../repositories/post';

export async function CreatePost(data: Partial<IPost>): Promise<any> {
	const createdPost = await createPost(data);

	return createdPost;
}
