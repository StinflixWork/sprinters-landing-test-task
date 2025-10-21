import { DRIVERS } from '@/shared/const/drivers.data'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'
import { EmployeeCard } from '@/widgets/EmployeeCard'

export const DriversSection = () => {
	return (
		<section>
			<Container className='py-10 md:py-[72px] flex flex-col gap-y-3 border-b border-solid border-neutral-20'>
				<div className='flex items-center justify-between'>
					<Heading as='h3'>Наші водії</Heading>
					<Button variant='link'>Усі водії (7)</Button>
				</div>
				<ul className='grid [grid-template-columns:repeat(auto-fill,minmax(225px,1fr))] gap-4'>
					{DRIVERS.map(({ id, ...driver }) => (
						<li key={id}>
							<EmployeeCard {...driver} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	)
}
