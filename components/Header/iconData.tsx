import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSortDownAlt } from 'react-icons/bs'
import { VscSymbolStructure } from 'react-icons/vsc'

export interface IconProps {
title:string,
path:string,
icon:ReactElement<IconType>,
name:string
}

const icons:Array<IconProps> = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
    name: 'nav-text',
  },
  {
    title: 'Sort',
    path: '/sort',
    icon: <BsSortDownAlt />,
    name: 'nav-text',
  },
  {
    title: 'Data Structure',
    path: '/data-structure',
    icon: <VscSymbolStructure />,
    name: 'nav-text',
  },
]

export default icons
