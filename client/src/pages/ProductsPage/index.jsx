import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { all_Products } from '../../requests/products_req';
import ProductsCard from '../../components/ProductsCard';
import s from './index.module.css';
import { useParams } from 'react-router-dom';
import { searchPrice, sortProducts } from '../../store/reducers/products';

export default function ProductsPage() {
	const dispatch = useDispatch();

	const { id } = useParams();

	const products = useSelector((state) => state.allProducts);
	const products_category = useSelector((state) => state.categories);

	console.log(products)
	
	useEffect(() => {
		dispatch(all_Products(id));
	}, []);

	const sort_products = (event) => dispatch(sortProducts(event.target.value));

	const search = (event) => {
		event.preventDefault();
		const { min, max } = event.target;
		const min_value = min.value || 0;
		const max_value = max.value || Infinity;
		dispatch(searchPrice({ min_value, max_value }));
	};

	const [isChecked, setIsChecked] = useState(false);

	
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	const headline = products_category.find((el) => el.id === +id);

	return (
		<section className={['wrapper', s.products_category].join(' ')}>
			<div>
				<h2>{headline.title}</h2>
			</div>

			<div className={s.sort}>
				<div>
					<form className={s.form_price} onSubmit={search}>
						<span>Price</span>
						<input
							type='number'
							placeholder='from'
							name='min'						
						/>
						<input
							type='number'
							placeholder='to'
							name='max'						
						/>
						<button>Search</button>
					</form>
				</div>

				<div>
					<form className={s.check_box}>
						<span>Discounted items</span>
						<input
							type='checkbox'
							id='discountedItems'
							name='discountedItems'
							checked={isChecked}
							onChange={handleOnChange}
						/>
					</form>
				</div>

				<div>
					<form className={s.sorting}>
						<span>Sorted</span>
						<select className={s.sort_select} onInput={sort_products}>
							<option value='default'>by default</option>
							<option value='title'>by title</option>
							<option value='price'>by price</option>
						</select>
					</form>
				</div>
			</div>

			<div className={s.products}>
				{products.length &&
					products
						.filter((el) => (el.price === el.discont_price) ? !isChecked : products)
						.filter((el) => !el.hide)
						.map((el) => <ProductsCard key={el.id} {...el} />)}
			</div>
		</section>
	);
}
