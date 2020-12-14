import { API_URL } from '../../version';

const fetchComments = async docId => {
	const headers = {
		'Content-Type': 'application/json',
	};

	const comments = await fetch(`${API_URL}/comments/${docId}`, headers);

	return await comments.json();
};

export default fetchComments;
