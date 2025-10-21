import type { SvgType } from '@/shared/lib/types/common'
import FireIcon from '@icons/profile-stats/fire.svg'
import IndustryIcon from '@icons/profile-stats/industry.svg'
import LocationIcon from '@icons/profile-stats/location.svg'
import TrainIcon from '@icons/profile-stats/train.svg'
import UsersIcon from '@icons/profile-stats/users.svg'

export type ProfileStatType = {
	id: number
	label: string
	value: string
	icon: SvgType
}

export const PROFILE_STATS: ProfileStatType[] = [
	{ id: 1, label: 'На ринку від:', value: 'Травень  31, 2011', icon: FireIcon },
	{ id: 2, label: 'Перевезених пасажирів', value: '4000+', icon: UsersIcon },
	{ id: 3, label: 'Автопарк', value: '8 бусів', icon: TrainIcon },
	{ id: 4, label: 'Обслуговуємо', value: '8 країн', icon: LocationIcon },
	{ id: 5, label: 'Місто', value: 'Львів', icon: IndustryIcon }
]
