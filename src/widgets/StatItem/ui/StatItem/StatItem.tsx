import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'

interface StatItemProps {
	icon: SvgType
	label: string
	value: string
}

export const StatItem = ({ icon, label, value }: StatItemProps) => {
	return (
		<div className='py-1 flex items-center gap-x-4'>
			<div className='w-[44px] h-[44px] grid place-items-center rounded-full bg-white'>
				<Svg icon={icon} />
			</div>
			<div className='text-base'>
				<p className='text-neutral-80'>{label}</p>
				<p className='text-neutral-100 font-semibold'>{value}</p>
			</div>
		</div>
	)
}
