import type { SvgType } from '@/shared/lib/types/common'
import { Heading } from '@/shared/ui/Heading'
import { Svg } from '@/shared/ui/Svg'
import { clsx } from 'clsx'

interface ServiceItemProps {
	icon: SvgType
	title: string
	className?: string
}

export const ServiceItem = ({ icon, title, className }: ServiceItemProps) => {
	return (
		<div className={clsx('flex items-center gap-x-3', className)}>
			<Svg icon={icon} height={48} width={48} className='text-primary shrink-0' />
			<Heading as='h4' className='break-words'>
				{title}
			</Heading>
		</div>
	)
}
