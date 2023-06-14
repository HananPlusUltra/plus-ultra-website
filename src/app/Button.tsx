import React, { ReactNode } from 'react';

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className=' flex justify-center items-center flex-col gap-4 h-12 border-2 border-solid border-[#00abf0] rounded-lg text-lg font-semibold py-1.5 px-3 hover:bg-[#00abf0]/30 backdrop-blur-xl transition'
		>
			{children}
		</button>
	);
};

export default Button;
