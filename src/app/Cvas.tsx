import { cva } from 'cva';

const ButtonStyle = cva(
	'flex justify-center items-center flex-col gap-4 hover:bg-picton-blue-500/30 border-2 font-semibold ',
	{
		variants: {
			intent: {
				primary: 'bg-picton-blue-500 border-transparent',
				secondary: 'border-solid border-picton-blue-500',
			},
			size: {
				small: ['text-sm', 'py-1', 'px-2'],
				medium: ['text-base', 'py-2', 'px-4'],
				'no-padding': ['text-sm'],
			},
			radius: {
				normal: 'rounded-lg',
				full: 'rounded-full',
			},
		},
		compoundVariants: [
			{
				intent: 'primary',
				size: 'medium',
				//className: 'uppercase',
			},
		],
		defaultVariants: {
			intent: 'secondary',
			size: 'medium',
			radius: 'normal',
		},
	}
);

export { ButtonStyle };
