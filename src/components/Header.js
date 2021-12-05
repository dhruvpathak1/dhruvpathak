import { Link } from 'gatsby'
import React from 'react'
import * as styles from './styles/header.module.css'

export default function Header() {
    return (
        <div>
          <div className={styles.navbox}>
              <h2 className={styles.name}>DP .</h2>
              <ul className={styles.nav}>
                <Link to='/' className={styles.navlist} activeClassName={styles.selectnav}>Home</Link>
                <Link to='/about' className={styles.navlist} activeClassName={styles.selectnav}>About</Link>
                <Link to='/exp' className={styles.navlist} activeClassName={styles.selectnav}>Portfolio</Link>
                <Link to='/project' className={styles.navlist} activeClassName={styles.selectnav}>Projects</Link>
                <Link to='/blog' className={styles.navlist} activeClassName={styles.selectnav}>Blogs</Link>
              </ul>
          </div>
        </div>
    )
}
