import React from 'react'
import debounce from 'lodash.debounce'

import { SearchContext } from '../../App'
import styles from './search.module.scss'
import images from '../../constants/images'

const Search = () => {
  const [value, setValue] = React.useState('')
  const { searchValue, setSearchValue } = React.useContext(SearchContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 250),
    []
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img src={images.search} alt="search" className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={onChangeInput}
        placeholder="Search pizza..."
      />
      {searchValue && (
        <img
          src={images.remove}
          alt="remove"
          className={styles.remove}
          onClick={onClickClear}
        />
      )}
    </div>
  )
}

export default Search
