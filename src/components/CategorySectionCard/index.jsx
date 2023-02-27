import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css'

export default function CategorySectionCard({ image, title }) {
  return (
		<Link className={s.cat_picture} to='/categories'>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p>{title}</p>
		</Link>
	);
}
