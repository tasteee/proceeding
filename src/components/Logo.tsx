import Image from 'next/image'
import styles from './Logo.module.css'

export const Logo = () => {
	return (
		<Image
			src="https://nextjs.org/icons/next.svg"
			className={styles.Logo}
			alt="logo"
			width={180}
			height={38}
			priority
		/>
	)
}
