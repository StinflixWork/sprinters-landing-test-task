import { SERVICES } from '@/shared/const/services.data'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'
import { ServiceItem } from '@/widgets/ServiceItem'

export const ServicesSection = () => {
	return (
		<section className='py-10 md:py-[72px]'>
			<Container className='flex flex-col gap-y-6'>
				<div>
					<Heading as='h3' className='mb-2'>
						Сервіс
					</Heading>
					<p className='text-neutral-80'>Найкращі умови для вашого комфорту</p>
				</div>
				<ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4'>
					{SERVICES.map(({ id, ...service }) => (
						<li key={id}>
							<ServiceItem {...service} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	)
}
