import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'
import { ReviewsSlider } from '../../components/ReviewsSlider'
import styles from './ReviewsSection.module.scss'

export const ReviewsSection = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<Heading as='h2' className='mb-5'>
						Що <span className='text-accent'>кажуть люди?</span>
					</Heading>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<Button className='mt-10 rounded-md'>Залишити відгук</Button>
				</div>
				<ReviewsSlider />
			</Container>
		</section>
	)
}
