import React from 'react';
import s from './index.module.css';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function Footer() {
	return (
		<footer className={['wrapper', s.footer].join(' ')}>
			<div id='contacts' className={s.contacts}>
				<h3>Contacts</h3>
				<p>+49 999 999 99</p>
				<div className={s.social_network_icons}>
					<a href='https://www.instagram.com/'>
						<InstagramOutlined />
						Instagram
					</a>
					<a href='https://web.whatsapp.com/'>
						<WhatsAppOutlined />
						WhatsApp
					</a>
				</div>
			</div>
			<div className={s.address}>
				<p>Address</p>
				<p>
					Linkstraße 2, 8 OG, 10785,
					<br />
					Berlin, Deutschland
				</p>
				<p>Working Hours:</p>
				<p>24 hours a day</p>
			</div>
		</footer>
	);
}
