import React from 'react';

const Button = ({ text, link, variant = 'primary', size }) => {
	const baseStyles =
		'inline-block px-8 py-3 rounded-lg transition duration-300 cursor-pointer';
	const primaryStyles = 'bg-[#2b6ce5a9] text-white hover:bg-blue-700';
	const outlineStyles =
		'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white';

	return (
		<a
			href={link}
			className={`
				${baseStyles} 
				${size == 'sm' ? 'text-[14px]' : 'text-[16px]'}
				${size == 'sm' ? 'px-[18px]' : size == 'base' ? 'px-[20px]' : 'px-[24px]'}
				${variant === 'primary' ? primaryStyles : outlineStyles}`}>
			{text}
		</a>
	);
};

export default Button;
