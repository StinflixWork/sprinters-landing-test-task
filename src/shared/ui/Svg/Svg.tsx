import type { SVGProps } from 'react'
import type { SvgType } from '@/shared/lib/types/common'

interface SvgProps extends SVGProps<SVGSVGElement> {
	icon: SvgType
}

export const Svg = (props: SvgProps) => {
	const { icon, width = 24, height = 24, ...rest } = props

	const WrapperIcon = icon

	return <WrapperIcon width={width} height={height} {...rest} />
}
