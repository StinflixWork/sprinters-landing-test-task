import Link from 'next/link'
import type { MenuType } from '@/shared/const/menu.data'
import { clsx } from 'clsx'
import styles from './NavItem.module.scss'

interface NavItemProps extends Omit<MenuType, 'id'> {
	isActive: boolean
}

export const NavItem = ({ title, href, isActive }: NavItemProps) => {
	return (
		<li className={clsx(styles.link, { [styles.active]: isActive })}>
			<Link href={href}>{title}</Link>
		</li>
	)
}
