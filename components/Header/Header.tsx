import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineMenuFold } from 'react-icons/ai'
import Link from '@/components/Link'
import icons, { IconProps } from './iconData'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [ toggled, setToggled ] = useState<Boolean>(false)
  const folding = () => setToggled((prevState) => !prevState)
  const { pathname } = useRouter()
  useEffect(() => {
    if (window.matchMedia('(max-width: 500px)').matches) folding()
  }, [])
  return (
    <header className={cn(styles.header, { [ styles.active ]: toggled })} role="banner">
      <nav role="navigation" className={styles.nav}>
        <div className={cn(styles.title, { [ styles.active ]: toggled })}>
          <NextLink href="/" passHref>
            <a><h2>Menu</h2></a>
          </NextLink>
          <AiOutlineMenuFold
            className={cn(styles.title__icon, { [ styles.active ]: toggled })}
            onClick={folding}
            role="presentation"
            aria-label="fold"
          />
        </div>
        <ul aria-labelledby="navigation" className={styles.list}>
          {icons.map((items:IconProps):React.ReactElement => {
            const isActive = pathname === items.path
            return (
              <Link items={items} isActive={isActive} key={items.name} />
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
