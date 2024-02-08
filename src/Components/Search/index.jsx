import React from 'react'

import styles from './search.module.scss'

const Search = () => {
  return (
    <input 
    className={styles.root}
    placeholder='Search pizza...'/>
  )
}

export default Search
