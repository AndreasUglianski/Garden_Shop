import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav';
import { useState } from 'react';

export default function Layout() {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<div>
			<Nav menuActive={menuActive} setMenuActive={setMenuActive} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
