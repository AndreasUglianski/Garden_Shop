import React from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';

export default function DiscountForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'onChange' });

	const submit = (data) => {
		console.log(data);
		reset();
	};

	const phoneRegister = register('phone', {
		required: '*The field "phone number" is requared!',
		pattern: {
			value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
			message: 'Must be in the format: +49 123456789**',
		},
	});


	return (
		<form onSubmit={handleSubmit(submit)} className={s.coupon_form}>
			<input
				type='tel'
				name='phone'
				// defaultValue={'+49 '}
				title='phone'
				placeholder='Enter your phone number'
				{...phoneRegister}
			/>
			{errors?.phone && <p>{errors?.phone?.message}</p>}
			<button>Get a discount</button>
		</form>
	);
}
