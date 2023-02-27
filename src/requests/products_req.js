import { allProducts } from "../store/reducers/products";

export const all_Products = (id) => {
	return (dispatch) => {
		fetch(`http://localhost:3333/categories/${id}`)
			.then((resp) => resp.json())
			.then((json) => {
				const payload = json.map(el => ({...el, hide: false}))
				dispatch(allProducts(payload));
			}); 
	}
	};


