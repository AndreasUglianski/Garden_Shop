import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryCard({ image, title, id }) {
	return (
		<Link className={s.category_card} to={`/categories/${id}`}>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p>{title}</p>
		</Link>
	);
}
