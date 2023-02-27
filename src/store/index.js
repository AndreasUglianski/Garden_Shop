import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cart';
import { categoriesReducer } from './reducers/categories';
import { allProductsReducer } from './reducers/products';
import { productReducer } from './reducers/product_item';
import { randomPromotionsReducer } from './reducers/random_promotion';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	allProducts: allProductsReducer,
	randomPromotions: randomPromotionsReducer,
	product_item: productReducer,
	cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
