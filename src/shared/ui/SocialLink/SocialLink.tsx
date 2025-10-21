import Link from 'next/link'
import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'

interface SocialLinkProps {
	icon: SvgType
	href: string
}

export const SocialLink = ({ href, icon }: SocialLinkProps) => {
	return (
		<Link
			href={href}
			className='w-8 h-8 grid place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20'
		>
			<Svg icon={icon} width={16} height={16} className='text-white' />
		</Link>
	)
}
