import React from 'react'
import debounce from 'lodash.debounce'

import { AppContext } from '../../App'
import styles from './search.module.scss'
import images from '../../constants/images'

const Search = () => {
  const [value, setValue] = React.useState('')
  const { setSearchValue } = React.useContext(AppContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),
    []
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  React.useEffect(() => {}, [])

  return (
    <div className={styles.root}>
      <img src={images.search} alt="search" className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        placeholder="Search pizza..."
        onChange={onChangeInput}
      />
      {value && (
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
