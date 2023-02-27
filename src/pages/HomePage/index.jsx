import React from 'react';
import CategoriesSection from '../../components/CategoriesSection';
import DiscountCoupon from '../../components/DiscountCoupon';
import PromoContainer from '../../components/PromoContainer';
import Sales from '../../components/Sales';

export default function HomePage() {
	return (
		<div>
            <Sales />
            <CategoriesSection />
            <DiscountCoupon />
            <PromoContainer/>
		</div>
	);
}
