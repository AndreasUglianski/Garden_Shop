import React  from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import logo from './media/logo.png';
import s from './index.module.css';
import { HashLink } from 'react-router-hash-link';


import {GrCart} from 'react-icons/gr'
import { MenuOutlined } from '@ant-design/icons';

export default function Nav({ menuActive, setMenuActive }) {

const cart = useSelector((state) => state.cart);
const count = cart.reduce((prev, { count }) => prev + count, 0);

	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo}>
				<RouterLink to='/'>
					<img src={logo} alt='logo' />
				</RouterLink>
				<RouterLink to='categories'>
					<button className={s.catalog}>Catalog</button>
				</RouterLink>
			</div>

			<ul className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
				<HashLink to='/categories'>Categories</HashLink>
				<HashLink to='/#coupon' smooth={true} offset={-100} duration={1000}>
					Coupon
				</HashLink>
				<HashLink to='/#promo' smooth={true} offset={-100} duration={1000}>
					Promotions
				</HashLink>
				<HashLink to='/#contacts' smooth={true} duration={1000}>
					Contacts
				</HashLink>
				<HashLink to='/cart' className={s.cart}>
					{count > 0 && <span className={s.cart_counter}>{count}</span>}
					<GrCart />
				</HashLink>
			</ul>
			<MenuOutlined
				className={s.menu_icon}
				onClick={() => setMenuActive(menuActive ? false : true)}
			/>
		</nav>
	);
}
