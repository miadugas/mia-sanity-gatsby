import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/' activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-white-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest">{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/' activeClassName="text-white-100 bg-gray-200"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-800">About</Link>
          </li>
          <li>
            <Link to='/projects/' activeClassName="text-white-100 bg-gray-200"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">Projects</Link>
          </li>
          <li>
            <Link to='/blog/' activeClassName="text-white-100 bg-gray-200"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">Blog</Link>
          </li>
          <li>
            <Link to='/contact/' activeClassName="text-white-100 bg-gray-200"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
