import { FilterQuery, QueryOptions } from 'mongoose';
import { IPost, Post } from '../models/Post';

// The return type is
// :Promise<Document<unknown, any, IPost> & IPost & {
//  _id: Types.ObjectId;
// }>

export async function createPost(data: Partial<IPost>) {
	const post = await new Post(data).save();

	return post.toObject();
}

export async function findPosts({
	options,
	projection,
	query,
}: {
	query?: FilterQuery<IPost>;
	projection?: any;
	options?: QueryOptions;
}) {
	const posts = await Post.find(query || {}, projection || null, options || {});

	return posts;
}

export async function findPostById(id: string) {
	const post = await Post.findOne({ _id: id });

	return post;
}

export async function updatePost(id: string, updateData: Partial<IPost>) {
	const post = await Post.findOneAndUpdate({ _id: id }, updateData);

	return post;
}

export async function deletePost(id: string) {
	const post = await Post.findOneAndDelete({ _id: id });

	return post;
}
