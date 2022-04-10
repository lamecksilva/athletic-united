import { model, Schema, Types } from 'mongoose';

const { ObjectId } = Types;

interface IPost {
	title: string;
	text: string;
	author: {
		id: string;
		name: string;
	};
	likes: {
		total: number;
		reactions: { type: string; total: number }[];
	};
}

const postSchema = new Schema<IPost>({
	title: { type: String, required: true },
	text: { type: String, required: true },
	author: {
		id: { type: ObjectId, required: true },
		name: { type: String, required: true },
	},
	likes: {
		total: { type: Number, required: true, default: 0 },
		reactions: [
			{
				type: { type: String, required: true },
				total: { type: Number, required: true, default: 0 },
			},
		],
	},
});

export const Post = model<IPost>('Post', postSchema);
