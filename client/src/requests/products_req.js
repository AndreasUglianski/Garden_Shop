import { allProducts } from "../store/reducers/products";

export const all_Products = (id) => {
	return (dispatch) => {
		fetch(`https://garden-0xcl.onrender.com/categories/${id}`)
			.then((resp) => resp.json())
			.then((json) => {
				const payload = json.map((el) => ({ ...el, hide: false }));
				dispatch(allProducts(payload));
			}); 
	}
	};


