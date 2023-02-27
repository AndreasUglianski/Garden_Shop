import { React, useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PromoItem from '../PromoItem';
import { random_promo_products } from '../../requests/random_promo_req';

export default function PromoContainer() {
	const dispatch = useDispatch();
	const promotions = useSelector((state) => state.randomPromotions);

	useEffect(() => {
		dispatch(random_promo_products); 
	}, []);

	return (
		<section className={['wrapper', s.promotion_section].join(' ')}>
			<div id='promo' className={s.promo_subheader}>
				<h2>Promotions</h2>
			</div>
			<div className={s.promo_card}>
				{promotions
					.filter((el) => el.price !== el.discont_price)
					.sort(() => 0.5 - Math.random())
					.slice(0, 4)
					.map((el) => (
						<PromoItem key={el.id} {...el} />
					))}
			</div>
		</section>
	);
}
