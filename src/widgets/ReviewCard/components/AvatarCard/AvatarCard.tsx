import Image from 'next/image'
import type { ReviewType } from '@/shared/const/reviews.data'
import { Heading } from '@/shared/ui/Heading'
import AvatarPlaceholder from '@images/Avatar-placeholder.png'

export const AvatarCard = (props: Omit<ReviewType, 'id' | 'text' | 'rate'>) => {
	const { avatar, fullName, address, date } = props

	const imageSrc = avatar ? avatar : AvatarPlaceholder

	return (
		<div className='flex items-center gap-x-5'>
			<div className='w-[72px] h-[72px] rounded-full overflow-hidden bg-neutral-20'>
				<Image src={imageSrc} alt='Avatar review card' />
			</div>
			<div className='flex flex-col gap-y-2'>
				<Heading as='h4'>{fullName}</Heading>
				<p className='text-primary text-sm font-medium'>{address}</p>
				<p className='text-neutral-60 text-sm'>{date}</p>
			</div>
		</div>
	)
}
