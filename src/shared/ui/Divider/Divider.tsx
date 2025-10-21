import { clsx } from 'clsx'
import styles from './Divider.module.scss'

interface DividerProps {
	direction: 'horizontal' | 'vertical'
	className?: string
}

export const Divider = ({ direction, className }: DividerProps) => {
	return <div className={clsx(styles.root, styles[direction], className)}></div>
}
