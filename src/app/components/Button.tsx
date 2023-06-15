import React from 'react';
import { ButtonStyle } from '../Cvas';
import { ButtonProps } from '../Types';
import Link from 'next/link';

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	type,
	intent,
	href,
	radius,
	size,
	icon,
}) => {
	let Button = (
		<button
			onClick={onClick}
			type={type ?? 'button'}
			className={ButtonStyle({ intent })}
		>
			{children}
		</button>
	);
	if (href)
		Button = (
			<Link href={href} className={ButtonStyle({ intent, radius, size })}>
				{children}
			</Link>
		);
	if (icon && href)
		Button = (
			<Link
				href={href}
				className={`!rounded-full !p-0  h-8 w-8 ${ButtonStyle({
					intent,
					radius,
					size,
				})}`}
			>
				<i className={icon}></i>
			</Link>
		);
	return Button;
};

export default Button;
