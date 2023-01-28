import React from 'react'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function Menu(to) {
   
   
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to= "/">
                Início
            </MenuLink>
            <MenuLink to="/sobremim">
                Sobre mim
            </MenuLink>
        </nav>
    </header>
  )
}
