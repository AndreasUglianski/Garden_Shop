import React from 'react';
import s from './index.module.css';
import image from './media/gnome.png';
import DiscountForm from '../DiscountForm';



export default function DiscountCoupon() {
	return (
		<section className={['wrapper', s.container].join(' ')}>
			<div id='coupon' className={s.image}>
				<img src={image} alt='gnome' />
			</div>
			<div className={s.info_block}>
				<h2>Discount 5%</h2>
				<p>for the first order</p>

				<div className={s.discount_form}>
					<DiscountForm />
				</div>
			</div>
		</section>
	);
}
