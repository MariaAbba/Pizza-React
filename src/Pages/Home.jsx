import React from 'react'
import axios from 'axios'
import qs from 'qs'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice'
import { AppContext } from '../App'

import Categories from './../Components/Categories'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Sort from './../Components/Sort'
import { list } from '../Components/Sort'
import Pagination from '../Components/Pagination/index'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { categoryId, currentPage } = useSelector((state) => state.filter)
  const sortType = useSelector((state) => state.filter.sort.sortProperty)

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const { searchValue } = React.useContext(AppContext)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  const fetchPizzas = () => {
    setIsLoading(true)
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''
    axios
      .get(
        `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?&page=${currentPage}&limit=6&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.replace('-', '')}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
  }
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty)

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true
    }
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)

    if (!isSearch.current) {
      fetchPizzas()
    }

    isSearch.current = false
  }, [categoryId, sortType, currentPage, searchValue])

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sortType, currentPage])

  // const fetchPizzas = () => {
  //   setIsLoading(true)
  //   const order = sortType.includes('-') ? 'asc' : 'desc'
  //   const search = searchValue ? `&search=${searchValue}` : ''
  //   axios
  //     .get(
  //       `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?&page=${currentPage}&limit=6&${
  //         categoryId > 0 ? `category=${categoryId}` : ''
  //       }&sortBy=${sortType.replace('-', '')}&order=${order}${search}`
  //     )
  //     .then((res) => {
  //       setItems(res.data)
  //       setIsLoading(false)
  //     })
  //   window.scrollTo(0, 0)
  // }

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1))

  //     const sort = list.find((obj) => obj.sortProperty === params.sortProperty)

  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       })
  //     )
  //     isSearch.current = true
  //   }
  // }, [])

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)

  //   if (!isSearch.current) {
  //     fetchPizzas()
  //   }
  //   isSearch.current = false
  // }, [categoryId, sortType, currentPage])

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sortType,
  //       categoryId,
  //       currentPage,
  //     })

  //     navigate(`?${queryString}`)
  //   }
  //   isMounted.current = true
  // }, [categoryId, sortType, currentPage])

  return (
    <>
      <div className="container"></div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                // {...obj}
              />
            ))}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      <div />
    </>
  )
}

export default Home
