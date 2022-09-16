import * as PostApi from '../api/postRequest.js';

export const getTimelinePosts = (id) => async (dispatch) => {
	dispatch({ type: 'RETRIEVING_START' });
	try {
		const { data } = await PostApi.getTimelinePosts(id);
		dispatch({ type: 'RETRIEVING_SUCCESS', data: data });
	} catch (error) {
		console.log(error.message);
		dispatch({ type: 'RETRIEVING_FAIL' });
	}
};
