import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface HeadingProps extends PropsWithChildren {
	as: 'h2' | 'h3' | 'h4' | 'h5'
	className?: string
}

const sizeHeading = {
	h2: 'text-[2rem] sm:text-[3rem] leading-[1.1]',
	h3: 'text-[2rem] leading-[1.2]',
	h4: 'text-[1.5rem] leading-[1.2]',
	h5: 'text-[1.125rem] leading-[1.2]'
} as const

export const Heading = ({ children, as, className }: HeadingProps) => {
	const WrapperHeading = as

	return (
		<WrapperHeading className={clsx('font-lato font-bold', sizeHeading[as], className)}>
			{children}
		</WrapperHeading>
	)
}
