import Link from 'next/link'
import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'
import { clsx } from 'clsx'

interface AppLinkProps {
	label: string
	href: string
	icon?: SvgType
	classes?: {
		icon?: string
		link?: string
	}
}

export const AppLink = ({ label, href, icon, classes }: AppLinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				'inline-flex gap-x-1 text-primary text-base font-semibold hover:text-primary-light hover:underline underline-offset-4',
				classes?.link ? classes.link : ''
			)}
		>
			{icon && <Svg icon={icon} className={classes?.icon} />}
			{label}
		</Link>
	)
}
