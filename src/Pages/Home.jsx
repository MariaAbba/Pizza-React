import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Categories from './../Components/Categories'
import PizzaBlock from './../Components/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Sort from './../Components/Sort'

const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = useState({
    name: 'Best Sellers',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
 
    axios
      .get(
        `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?$${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty.replace('-', '')}&order=${
         order
        }`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType])

  // useEffect(() => {
  //   setIsLoading(true)

  //   const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
  //   console.log('Raw Category ID:', categoryId) // Log raw category ID
  //   const trimmedCategoryId =
  //     categoryId > 0 ? `category=${categoryId}`.trim() : ''
  //   console.log('Trimmed Category ID:', trimmedCategoryId)
  //   const categoryQueryParam = trimmedCategoryId ? `${trimmedCategoryId}&` : ''
  //   const apiUrl = `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?${categoryQueryParam}sortBy=${sortType.sortProperty.replace(
  //     '-',
  //     ''
  //   )}&order=${order}`

  //   console.log('API URL:', apiUrl)

  //   axios
  //     .get(apiUrl)
  //     .then((res) => {
  //       console.log('API Response:', res.data)
  //       setItems(res.data)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error('API Error:', error)
  //       setIsLoading(false)
  //     })

  //   window.scrollTo(0, 0)
  // }, [categoryId, sortType])

  // useEffect(() => {
  //   setIsLoading(true)

  //   const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
  //   const trimmedCategoryId = categoryId > 0 ? `category=${categoryId}`.trim() : ''
  //   const apiUrl = `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?${trimmedCategoryId}&sortBy=${sortType.sortProperty.replace(
  //     '-',
  //     ''
  //   )}&order=${order}`

  //   axios
  //     .get(apiUrl)
  //     .then((res) => {
  //       console.log('API Response:', res.data)
  //       setItems(res.data)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error('API Error:', error)
  //       setIsLoading(false)
  //     })

  //   window.scrollTo(0, 0)
  // }, [categoryId, sortType])

  return (
    <>
      <div className="container"></div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
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
      <div />
    </>
  )
}

export default Home
