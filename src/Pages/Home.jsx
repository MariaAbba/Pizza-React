import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppContext } from '../App'

import axios from 'axios'

import {setCategoryId} from '../redux/slices/filterSlice'
import Categories from './../Components/Categories'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Sort from './../Components/Sort'
import Pagination from '../Components/Pagination/index'

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortType, setSortType] = React.useState({
    name: 'Best Sellers',
    sortProperty: 'rating',
  })
  const { searchValue } = React.useContext(AppContext)


  React.useEffect(() => {
    setIsLoading(true)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    axios
      .get(
        `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?&page=${currentPage}&limit=6&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty.replace(
          '-',
          ''
        )}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, currentPage, searchValue])

  return (
    <>
      <div className="container"></div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                // {...obj}
              />
            ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
      <div />
    </>
  )
}

export default Home
