import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

function saveToLocalStorage(store) {
	try {
		const serializedStore = JSON.stringify(store);
		window.localStorage.setItem('store', serializedStore);
	} catch (error) {
		console.log(error.message);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedStore = window.localStorage.getItem('store');
		if (serializedStore === null) return undefined;
		return JSON.parse(serializedStore);
	} catch (error) {
		console.log(error.message);
		return undefined;
	}
}
const persistedState = loadFromLocalStorage();

const store = createStore(
	reducers,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
