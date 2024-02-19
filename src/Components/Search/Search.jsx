import React from 'react'
import debounce from 'lodash.debounce'
// import { useSelector, useDispatch } from 'react-redux'
// import { setSearch} from '../../redux/slices/filterSlice'

import styles from './search.module.scss'
import { AppContext } from '../../App'

import images from '../../constants/images'

const Search = () => {
  const [value, setValue] = React.useState('')
  const { searchValue, setSearchValue } = React.useContext(AppContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  // const onChangeInput = React.useCallback(
  //   debounce((event) => {
  //   setSearchValue(event.target.value)
  //   }, 1000),
  //   []
  // )

  const onChangeInput = (event) => {
    setValue(event.target.value)
  }

  React.useEffect(() => {}, [])
  // const dispatch = useDispatch()
  // const search = useSelector((state) => state.filter.search)

  // const SearchValue = (e) => {
  //  dispatch(e.target.value)
  // }
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
