// @ts-expect-error TS7016
import * as mockingoose from 'mockingoose';
import { IPost, Post } from '../../models/Post';
import { createPost } from '../post';

describe('Posts repository', () => {
	describe('createPost', () => {
		it('should create a post', async () => {
			const _post: IPost = {
				title: 'My Workout Routine',
				text: 'My trainer send me a workout ABC-ABC and works very well!',
				likes: {
					total: 0,
					reactions: [],
				},
				author: {
					id: '625312a23f45ce2c790a59ad',
					name: 'Lameck Sandro',
				},
			};

			mockingoose(Post).toReturn(
				{ ..._post, _id: '6253118eef0d360c9bd95fa6' },
				'save'
			);

			const result = await createPost(_post);

			// I get this stringify and parse from mockingoose example in documentation...
			expect(JSON.parse(JSON.stringify(result))).toMatchObject({
				..._post,
				_id: '6253118eef0d360c9bd95fa6',
			});
		});
	});

	// describe('findPosts', () => {
	// 	it('should return a list of posts', async () => {});
	// });
});
