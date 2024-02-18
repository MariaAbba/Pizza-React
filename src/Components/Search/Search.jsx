import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setSearch} from '../../redux/slices/filterSlice'

import styles from './search.module.scss'
import { AppContext } from '../../App'

import images from '../../constants/images'

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext)

  const onClickClear = () => {
    setSearchValue('')
    document.querySelector('input').focus()
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
          onClick={onClickClear}
        />
      )}
    </div>
  )
}

export default Search
