import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'
import Link from 'next/link'

interface EmployeeSocialLinkProps {
	href: string
	icon: SvgType
}

export const EmployeeSocialLink = ({ href, icon }: EmployeeSocialLinkProps) => {
	return (
		<Link href={href} className='text-neutral-80'>
			<Svg icon={icon} />
		</Link>
	)
}
