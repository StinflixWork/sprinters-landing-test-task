import type { ProfileStatType } from '@/shared/const/profileStats.data'
import { StatItem } from '@/widgets/StatItem'

interface ProfileStatsProps {
	stats: ProfileStatType[]
}

export const ProfileStats = ({ stats }: ProfileStatsProps) => {
	return (
		<ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-4'>
			{stats.map(({ id, ...stat }) => (
				<li key={id}>
					<StatItem {...stat} />
				</li>
			))}
		</ul>
	)
}
