import Image from 'next/image'
import type { DriverType } from '@/shared/const/drivers.data'
import { EmployeeFooter } from '@/widgets/EmployeeCard/ui/EmployeeFooter'
import AvatarPlaceholder from '@images/Avatar-placeholder.png'

export const EmployeeCard = (props: Omit<DriverType, 'id'>) => {
	const { avatarLink, fullName, description, socials } = props

	const avatarImage = avatarLink ? avatarLink : AvatarPlaceholder

	return (
		<article className='p-6 flex flex-col items-center gap-y-4 border border-solid border-neutral-20 rounded'>
			<div className='w-20 h-20 rounded-full overflow-hidden'>
				<Image
					src={avatarImage}
					alt={`Employee ${fullName} avatar`}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='text-center'>
				<p className='text-lg font-semibold mb-1'>{fullName}</p>
				<p className='text-base text-neutral-60'>{description}</p>
			</div>
			{socials && <EmployeeFooter socials={socials} />}
		</article>
	)
}
