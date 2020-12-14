import { API_URL } from '../../version';

const postComment = async body => {
	const headers = {
		'Content-Type': 'application/json',
	};

	const comment = await fetch(`${API_URL}/comments`, {
		headers,
		method: 'POST',
		body: JSON.stringify(body),
	});

	return await comment.json();
};

export default postComment;
