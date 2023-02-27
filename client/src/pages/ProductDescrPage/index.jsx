import React from 'react';
import s from './index.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { load_product } from '../../requests/product_item_req';
import { addToCart } from '../../store/reducers/cart';

export default function ProductDescrPage() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product_item);
	const { id } = useParams();

	

	const add_to_cart = () =>
		dispatch(addToCart({ id: +id, title, image, price, discont_price }));

	useEffect(() => {
		dispatch(load_product(id));
	}, [dispatch, id]);

	const { title, description, price, image, discont_price } = product;

	// console.log(product);

	return (
		<section className={['wrapper', s.product_descr].join(' ')}>
			<div>
				<h2 className={s.title}>{title}</h2>
				<div className={s.img_wrapper}>
					{image && <img src={`http://127.0.0.1.:3333${image}`} alt={title} />}
				</div>
			</div>

			<div className={s.info_block}>
				<div className={s.price_block}>
					<p className={s.discount_price}>{discont_price}$</p>
					<p className={s.price}>{price}$</p>
					<p className={s.discount}>
						-{Math.round(((price - discont_price) * 100) / price)}%
					</p>
				</div>
				<button onClick={add_to_cart}>Add to cart</button>
				<p className={s.subheader_descr}>Description:</p>
				<p className={s.text}>{description}</p>
			</div>
		</section>
	);
}
