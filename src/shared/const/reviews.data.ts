import type { ImageType } from '@/shared/lib/types/common'
import Avatar1 from '@images/reviews/avatar-1.png'
import Avatar2 from '@images/reviews/avatar-2.png'

export type ReviewType = {
	id: number
	avatar: ImageType
	fullName: string
	address: string
	date: string
	text: string
	rate: number
}

export const REVIEWS: ReviewType[] = [
	{
		id: 1,
		avatar: Avatar1,
		fullName: 'Ben Yardley',
		address: 'Київ - Кишинів',
		date: '1 May 2023',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		rate: 5
	},
	{
		id: 2,
		avatar: Avatar2,
		fullName: 'Craig Martin',
		address: 'Львів - Париж',
		date: '1 May 2023',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
		rate: 5
	},
	{
		id: 3,
		avatar: null,
		fullName: 'Tom Holand',
		address: 'Київ - Кишинів',
		date: '1 May 2023',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		rate: 3
	},
	{
		id: 4,
		avatar: null,
		fullName: 'David Buz',
		address: 'Львів - Париж',
		date: '1 May 2023',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
		rate: 4
	}
]
