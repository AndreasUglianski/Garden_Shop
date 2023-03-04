import { loadCategories } from '../store/reducers/categories';

export const load_categories = (dispatch) => {
	fetch('https://garden-0xcl.onrender.com/categories/all')
		.then((resp) => resp.json())
		.then((json) => dispatch(loadCategories(json)));//
};
