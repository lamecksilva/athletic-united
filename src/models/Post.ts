import { model, Schema, Types } from 'mongoose';

const { ObjectId } = Types;

export enum PostLikesTypes {
	'LIKE' = 'like',
	'LOVE' = 'love',
	'DISLIKE' = 'dislike',
	'CLAP' = 'clap',
}
export interface IPost {
	_id?: string;
	title: string;
	text: string;
	author: {
		id: string;
		name: string;
	};
	likes: {
		user: {
			id: string;
			name: string;
			avatar: string;
		};
		type: 'like' | 'dislike' | 'clap' | 'love';
	}[];
}

const postSchema = new Schema<IPost>({
	title: { type: String, required: true },
	text: { type: String, required: true },
	author: {
		id: { type: ObjectId, required: true },
		name: { type: String, required: true },
	},
	likes: [
		{
			user: {
				id: { type: ObjectId, required: true },
				name: { type: String, required: true },
				avatar: { type: String, required: false },
			},
			type: {
				type: String,
				required: true,
				enum: ['like', 'dislike', 'clap', 'love'],
				default: 'like',
			},
		},
	],
});

export const Post = model<IPost>('Post', postSchema);
