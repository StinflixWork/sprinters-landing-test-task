import type { ReviewType } from '@/shared/const/reviews.data'
import { Svg } from '@/shared/ui/Svg'
import StatIcon from '@icons/star.svg'
import { AvatarCard } from '../../components/AvatarCard'

export const ReviewCard = (props: Omit<ReviewType, 'id'>) => {
	const { text, rate, ...avatarData } = props

	return (
		<article className='px-5 pb-5 pt-7 w-[350px] h-[410px] flex flex-col gap-y-5 rounded-[10px] bg-white shadow-card'>
			<AvatarCard {...avatarData} />
			<div className='flex-auto overflow-hidden'>
				<p className='text-ellipsis line-clamp-9'>{text}</p>
			</div>
			<ul className='flex gap-x-1'>
				{Array.from({ length: rate }).map((_, i) => (
					<li key={i}>
						<Svg icon={StatIcon} width={16} height={16} className='text-primary' />
					</li>
				))}
			</ul>
		</article>
	)
}
