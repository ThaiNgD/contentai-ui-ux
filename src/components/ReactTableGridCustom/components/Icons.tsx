export const LoadingIcon = ({
	isSpin = false,
	h = 30,
	w = 30,
	size = 30,
	className
}: {
	isSpin?: boolean
	w?: number
	h?: number
	size?: number
	className?: string
}): JSX.Element => {
	return (
		<svg
			className={`${isSpin ? 'animate-spin' : ''} ${className ?? ''}`}
			viewBox="0 0 1024 1024"
			focusable="false"
			data-icon="loading"
			width={size || w}
			height={size || h}
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
		</svg>
	)
}

export const ArrowIcon = ({
	h,
	w,
	size,
	className
}: {
	w?: number
	h?: number
	size?: number
	className?: string
}): JSX.Element => {
	return (
		<svg
			className={className}
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			height={size ?? h}
			width={size ?? w}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
			></path>
		</svg>
	)
}
