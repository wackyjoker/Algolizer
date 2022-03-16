import NextLink from 'next/link'
import type { FC } from 'react'
import cn from 'classnames'
import type{ IconProps } from '@/components/Header/iconData'
import styles from './Link.module.scss'

interface ILink {
    items:IconProps,
    isActive:boolean,
    key:string
}

const Link:FC<ILink> = ({ items, isActive, key }) => (
  <li className={styles[ 'list-item__container' ]} key={key}>
    <NextLink
      href={items.path}
      key={items.name}
    >
      <a className={cn(
        styles[ 'list-item__link' ],
        { [ styles[ 'list-item__link--selected' ] ]: isActive },
      )}
      >
        <div role="listitem">
          {items.icon}
          <span>{items.title}</span>
        </div>
      </a>
    </NextLink>
  </li>
)
export default Link
