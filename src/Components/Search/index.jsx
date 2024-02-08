import React, {useContext} from 'react'

import styles from './search.module.scss'

import search from '../../assets/magnifying-glass.svg'

const Search = () => {
  return (
    <div className={styles.root}>
      <img src={search} alt="search" className={styles.icon} />
      <input className={styles.input} placeholder="Search pizza..." />
    </div>
  )
}

export default Search
