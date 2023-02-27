import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function PromoItem({ image, title, price, discont_price,id }) {
	const product_url = `/products/all`; 

	return (
		<div className={s.promo_item}>
			<Link to={product_url}>
				<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			</Link>

			<div className={s.prices}>
				<p className={s.discount_price}>{discont_price}$</p>
				<p className={s.price}>{price}$</p>
				<p className={s.discount}>
					-{Math.round(((price - discont_price) * 100) / price)}%
				</p>
			</div>

			<div className={s.promo_title}>
				<Link to={product_url}>
					<p>{title}</p>
				</Link>
			</div>
		</div>
	);
}
