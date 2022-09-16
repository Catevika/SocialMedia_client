import * as UserApi from '../api/userRequest';

export const updateUser = (id, formData) => async (dispatch) => {
	dispatch({ type: 'UPDATING_START' });
	try {
		const { data } = await UserApi.updateUser(id, formData);
		dispatch({ type: 'UPDATING_SUCCESS', data: data });
	} catch (error) {
		console.log(error.message);
		dispatch({ type: 'UPDATING_FAIL' });
	}
};

export const followUser = (id, data) => async (dispatch) => {
	try {
		dispatch({ type: 'FOLLOW_USER' });
		await UserApi.followUser(id, data);
	} catch (error) {
		console.log(error.message);
	}
};

export const unfollowUser = (id, data) => async (dispatch) => {
	try {
		dispatch({ type: 'UNFOLLOW_USER' });
		await UserApi.unfollowUser(id, data);
	} catch (error) {
		console.log(error.message);
	}
};
