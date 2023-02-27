import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../../components/CartCard';
import FormCartTelNum from '../../components/FormCartTelNum';
import { clearCart } from '../../store/reducers/cart';
import s from './index.module.css';
import CartImg from './media/Cart.jpeg'

export default function CartPage() {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const clear_cart = () => dispatch(clearCart());
	
	// console.log(...cart);

	const total = Math.round(
 		cart.reduce((prev, { price, count }) => prev + price * count, 0));

	return (
		<section className={['wrapper', s.cart_page].join(' ')}>
			<h2>Shopping cart</h2>
			{cart.length === 0 ? (
				<div className={s.empty_card}>
					<p>Cart is empty, put in it something ...</p>
					<img src={CartImg} alt='' />
				</div>
			) : (
				<div className={s.cart_container}>
					<div>
						{cart.map((el) => (
							<CartCard key={el.id} {...el} />
						))}
					</div>

					<div className={s.orders_block}>
						<h3>Order details</h3>
						<p className={s.total}>
							Total:
							<span>
								{total}
								<span>$</span>
							</span>
						</p>
						<div className={s.total_form}><FormCartTelNum/></div>
						<div className={s.cart_btn}>
							<button onClick={clear_cart}>Clear cart</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}


