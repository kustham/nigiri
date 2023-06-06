import headerStyles from 'styles/components/header.module.scss'
import Image from 'next/image'

const Header = () => {
    return (
        <header className={headerStyles.agniHeader}>
            <Image src='/public/favicon.ico' width={500} height={500} alt='Picture of the author' />
        </header>
    )
}

export default Header
