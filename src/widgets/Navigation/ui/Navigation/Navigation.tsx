import { MENU } from '@/shared/const/menu.data'
import { Button } from '@/shared/ui/Button'
import { Divider } from '@/shared/ui/Divider'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { NavItem } from '../../components/NavItem'
import styles from './Navigation.module.scss'

interface NavigationProps {
	isOpen: boolean
}

export const Navigation = ({ isOpen }: NavigationProps) => {
	const pathname = usePathname()

	return (
		<nav className={clsx(styles.root, { [styles.open]: isOpen })}>
			<ul className={styles.list}>
				{MENU.map(({ id, ...menuItem }) => (
					<NavItem key={id} isActive={pathname === menuItem.href} {...menuItem} />
				))}
			</ul>
			<div className={styles.actions}>
				<Button variant='ghost'>Створити профіль</Button>
				<Divider direction='vertical' className={styles.divider} />
				<Button>Увійти</Button>
			</div>
		</nav>
	)
}
