import type { SvgType } from '@/shared/lib/types/common'
import FranceIcon from '@icons/flags/france.complex.svg'
import GermanyIcon from '@icons/flags/germany.complex.svg'
import ItalyIcon from '@icons/flags/italy.complex.svg'
import NetherlandsIcon from '@icons/flags/netherlands.complex.svg'
import SpainIcon from '@icons/flags/spain.complex.svg'

export type CountryType = {
	id: number
	name: string
	icon: SvgType
}

export const COUNTRIES: CountryType[] = [
	{ id: 1, name: 'Франція', icon: FranceIcon },
	{ id: 2, name: 'Італія', icon: ItalyIcon },
	{ id: 3, name: 'Німеччина', icon: GermanyIcon },
	{ id: 4, name: 'Нідерланди', icon: NetherlandsIcon },
	{ id: 5, name: 'Іспанія', icon: SpainIcon }
]
