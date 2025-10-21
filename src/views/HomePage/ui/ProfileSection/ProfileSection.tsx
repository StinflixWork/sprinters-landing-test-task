import Image from 'next/image'
import { PROFILE_STATS } from '@/shared/const/profileStats.data'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import ProfileAvatar from '@images/Stripe-logo.png'
import { ProfileContacts } from '../../components/ProfileContacts'
import { ProfileStats } from '../../components/ProfileStats'
import styles from './ProfileSection.module.scss'

export const ProfileSection = () => {
	return (
		<section className={styles.root}>
			<Container className='flex flex-col gap-y-10'>
				<Breadcrumbs />
				<div className='flex flex-col gap-6 md:flex-row'>
					<div className='w-[190px] h-[190px] rounded-full overflow-hidden shrink-0 self-center'>
						<Image
							src={ProfileAvatar}
							alt='Profile avatar'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='flex-auto flex flex-col gap-y-6'>
						<ProfileContacts />
						<ProfileStats stats={PROFILE_STATS} />
					</div>
				</div>
			</Container>
		</section>
	)
}
