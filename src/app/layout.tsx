import '../styles/reset.css'
import '../styles/colors.css'
import '../styles/borders.css'
import '../styles/shadows.css'
import '../styles/gradients.css'
import '../styles/themes.css'

import type { Metadata } from 'next'
import { fonts } from '#/styles/fonts'

const RootLayout = (props: React.PropsWithChildren) => {
	return (
		<html lang="en" className={fonts.rootClassNames}>
			<body>{props.children}</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'appy',
	description: 'does app stuff',
}

export default RootLayout
