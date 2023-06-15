import { ReactNode } from 'react';

interface ButtonProps {
	onClick?: () => void;
	children?: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	intent?: 'primary' | 'secondary';
	href?: string;
	radius?: 'normal' | 'full';
	size?: 'small' | 'medium' | 'no-padding';
	icon?: string;
}

export { type ButtonProps };
