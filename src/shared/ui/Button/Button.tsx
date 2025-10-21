import type { ButtonHTMLAttributes } from 'react'
import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'
import { clsx } from 'clsx'
import styles from './Button.module.scss'

type ButtonVariantType = 'solid' | 'outlined' | 'ghost' | 'link'
type ButtonSizeType = 'sm' | 'md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariantType
	size?: ButtonSizeType
	startIcon?: SvgType
	endIcon?: SvgType
}

export const Button = (props: ButtonProps) => {
	const {
		children,
		variant = 'solid',
		size = 'md',
		type = 'button',
		startIcon,
		endIcon,
		className,
		...rest
	} = props

	return (
		<button
			className={clsx(styles.root, styles[variant], styles[size], className)}
			type={type}
			{...rest}
		>
			{startIcon && <Svg icon={startIcon} />}
			{children}
			{endIcon && <Svg icon={endIcon} />}
		</button>
	)
}
