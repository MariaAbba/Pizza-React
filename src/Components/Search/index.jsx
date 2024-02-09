import React, {useContext} from 'react'

import styles from './search.module.scss'
import {AppContext} from '../../App'

import search from '../../assets/magnifying-glass.svg'

const Search = () => {
  const {searchValue, setSearchValue} = React.useContext(AppContext)
  return (
    <div className={styles.root}>
      <img src={search} alt="search" className={styles.icon} />
      <input
        className={styles.input}
        value={searchValue}
        placeholder="Search pizza..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default Search
