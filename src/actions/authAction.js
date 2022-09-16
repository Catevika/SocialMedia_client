import * as AuthApi from '../api/authRequest';

export const logIn = (formData) => async (dispatch) => {
	dispatch({ type: 'AUTH_START' });
	try {
		const { data } = await AuthApi.logIn(formData);
		dispatch({ type: 'AUTH_SUCCESS', data: data });
	} catch (error) {
		console.log(error.message);
		dispatch({ type: 'AUTH_FAIL', error });
	}
};

export const signUp = (formData) => async (dispatch) => {
	dispatch({ type: 'AUTH_START' });
	try {
		const { data } = await AuthApi.signUp(formData);
		dispatch({ type: 'AUTH_SUCCESS', data: data });
	} catch (error) {
		console.log(error.message);
		dispatch({ type: 'AUTH_FAIL', error });
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: 'LOG_OUT' });
};
