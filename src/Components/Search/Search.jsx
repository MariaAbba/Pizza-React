import React, { useContext } from 'react'

import styles from './search.module.scss'
import { AppContext } from '../../App'

import  images  from '../../constants/images'

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext)
  return (
    <div className={styles.root}>
      <img src={images.search} alt="search" className={styles.icon} />
      <input
        className={styles.input}
        value={searchValue}
        placeholder="Search pizza..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <img
          src={images.remove}
          alt="remove"
          className={styles.remove}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  )
}

export default Search
