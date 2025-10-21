import type { SvgType } from '@/shared/lib/types/common'
import HealthIcon from '@icons/services/health.svg'
import ModeFanIcon from '@icons/services/mode_fan.svg'
import TvIcon from '@icons/services/tv.svg'
import WcIcon from '@icons/services/wc.svg'
import WeekendIcon from '@icons/services/weekend.svg'
import WifiIcon from '@icons/services/wifi.svg'

export type ServiceType = {
	id: number
	icon: SvgType
	title: string
}

export const SERVICES: ServiceType[] = [
	{ id: 1, title: 'Кондиціонер', icon: ModeFanIcon },
	{ id: 2, title: 'Wi-Fi', icon: WifiIcon },
	{ id: 3, title: 'TV', icon: TvIcon },
	{ id: 4, title: 'Туалет', icon: WcIcon },
	{ id: 5, title: 'Зручні сидіння', icon: WeekendIcon },
	{ id: 6, title: 'Перевозимо тварин', icon: HealthIcon }
]
