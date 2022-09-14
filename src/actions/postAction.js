import * as PostApi from '../api/postRequest.js';

export const getTimelinePosts = (id) => async (dispatch) => {
	dispatch({ type: 'RETRIEVING_START' });
	try {
		const { data } = PostApi.getTimelinePosts(id);
		dispatch({ type: 'RETRIEVING_SUCCESS', data: data });
	} catch (error) {
		console.log(error);
		dispatch({ type: 'RETRIEVING_FAIL' });
	}
};
