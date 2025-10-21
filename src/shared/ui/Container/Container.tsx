import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface ContainerProps extends PropsWithChildren {
	className?: string
}

export const Container = ({ className, children }: ContainerProps) => {
	return (
		<div className={clsx('max-w-container mx-auto px-4 overflow-clip', className)}>{children}</div>
	)
}
