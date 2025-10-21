import Link from 'next/link'
import { Svg } from '@/shared/ui/Svg'
import LogoDark from '@icons/logo-dark.complex.svg'
import LogoLight from '@icons/logo-light.complex.svg'

interface LogoProps {
	isDark?: boolean
}

export const Logo = ({ isDark = false }: LogoProps) => {
	return (
		<Link href='/' className='relative z-20'>
			<Svg icon={!isDark ? LogoLight : LogoDark} width={160} height={!isDark ? 47 : 30} />
		</Link>
	)
}
