'use client'

import { REVIEWS } from '@/shared/const/reviews.data'
import { ReviewCard } from '@/widgets/ReviewCard'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ReviewsSlider = () => {
	return (
		<Swiper
			className='pb-12! w-full h-full md:w-auto'
			slidesPerView={1}
			modules={[Pagination, A11y]}
			pagination={{ clickable: true }}
			breakpoints={{
				1200: {
					slidesPerView: 2,
					spaceBetween: 30
				}
			}}
			spaceBetween={30}
			grabCursor
		>
			{REVIEWS.map(({ id, ...review }) => (
				<SwiperSlide key={id} className='grid place-items-center md:block'>
					<ReviewCard {...review} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
