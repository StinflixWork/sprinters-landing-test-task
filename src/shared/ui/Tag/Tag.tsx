interface TagProps {
	text: string
}

export const Tag = ({ text }: TagProps) => {
	return (
		<span
			className='inline-flex justify-center items-center px-3 py-1
		border border-solid border-primary text-base text-primary'
		>
			{text}
		</span>
	)
}
