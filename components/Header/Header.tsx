import React, { useState } from 'react'
import cn from 'classnames'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [toogled, setToggled] = useState(false)
  return (
    <header className={cn(styles.header, { [styles.active]: toggled })} role="banner" />
  )
}

export default Header
