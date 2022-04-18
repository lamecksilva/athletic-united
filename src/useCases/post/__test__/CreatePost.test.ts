// @ts-expect-error TS7016
import * as mockingoose from 'mockingoose';
import { IPost, Post } from '../../../models/Post';
import { CreatePost } from '../CreatePost';

describe('CreatePost useCase', () => {
	it('should create a post', async () => {
		const postCreateId = '6253118eef0d360c9bd95fa6';
		const _post: IPost = {
			title: 'My Workout Routine',
			text: 'My trainer send me a workout ABC-ABC and works very well!',
			likes: [],
			author: {
				id: '625312a23f45ce2c790a59ad',
				name: 'Lameck Sandro',
			},
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		mockingoose(Post).toReturn({ ..._post, _id: postCreateId }, 'save');

		const result = await CreatePost(_post);

		expect(JSON.parse(JSON.stringify(result))).toMatchObject({
			..._post,
			_id: postCreateId,
		});
	});
});
