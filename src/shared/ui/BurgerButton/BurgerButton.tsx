import { clsx } from 'clsx'
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps {
	isOpen: boolean
	onClick: () => void
}

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
	return (
		<button className={clsx(styles.root, { [styles.active]: isOpen })} onClick={onClick}>
			<span />
		</button>
	)
}
