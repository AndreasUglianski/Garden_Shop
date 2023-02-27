import { randomPromotionProducts } from "../store/reducers/random_promotion";

export const random_promo_products = (dispatch) => {
	fetch('http://localhost:3333/products/all')
		.then((resp) => resp.json())
		.then((json) => dispatch(randomPromotionProducts(json))); //randomPromotionProducts
};
