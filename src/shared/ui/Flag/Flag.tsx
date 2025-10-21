import type { SvgType } from '@/shared/lib/types/common'
import { Svg } from '@/shared/ui/Svg'

interface FlagProps {
	icon: SvgType
	name: string
}

export const Flag = ({ icon, name }: FlagProps) => {
	return (
		<div className='flex items-center gap-x-4'>
			<Svg icon={icon} width={42} height={32} />
			<p>{name}</p>
		</div>
	)
}
