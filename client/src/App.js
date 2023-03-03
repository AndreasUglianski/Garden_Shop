import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDescrPage from './pages/ProductDescrPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import PromoContainer from './components/PromoContainer';
import DiscountCoupon from './components/DiscountCoupon';
import { localStoreCard } from './store/reducers/cart';

function App() {

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const cartLocal = JSON.parse(localStorage.getItem('cart'));
		if (cartLocal && cartLocal.length) 
	dispatch(localStoreCard(cartLocal));
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='categories' element={<CategoriesPage />} />
					<Route path='promotions' element={<PromoContainer />} />
					<Route path='coupon' element={<DiscountCoupon />} />
					<Route path='categories/:id' element={<ProductsPage />} />
					<Route path='/products/:id' element={<ProductDescrPage />} />
					<Route path='cart' element={<CartPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
