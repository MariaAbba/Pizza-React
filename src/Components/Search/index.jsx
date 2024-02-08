import React from 'react'

import styles from './search.module.scss'

import search from '../../assets/magnifying-glass.svg'

const Search = () => {
  return (
    <div className={styles.block}>
      <img src={search} alt="search" className={styles.icon} />
      <input className={styles.root} placeholder="Search pizza..." />
    </div>
  )
}

export default Search
