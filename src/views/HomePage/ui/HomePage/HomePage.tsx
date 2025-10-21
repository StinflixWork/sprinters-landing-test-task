import { AboutProfileSection } from '../AboutProfileSection'
import { DriversSection } from '../DriversSection'
import { ProfileSection } from '../ProfileSection'
import { ReviewsSection } from '../ReviewsSection'
import { ServicesSection } from '../ServicesSection'

export const HomePage = () => {
	return (
		<div className='flex flex-col'>
			<ProfileSection />
			<AboutProfileSection />
			<DriversSection />
			<ServicesSection />
			<ReviewsSection />
		</div>
	)
}
