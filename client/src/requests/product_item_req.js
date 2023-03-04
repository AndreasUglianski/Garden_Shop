import { loadProduct } from '../store/reducers/product_item';

export const load_product = (id) => {
	return (dispatch) => {
		fetch(`https://garden-0xcl.onrender.com/products/${id}`)
			.then((resp) => resp.json())
			.then((json) => dispatch(loadProduct(json[0]))); //loadProduct
	};
};
