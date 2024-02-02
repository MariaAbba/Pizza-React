import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Categories from './../Components/Categories'
import PizzaBlock from './../Components/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Sort from './../Components/Sort'

const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://65bcb01fb51f9b29e9320d4c.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
  }, [])


  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
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
    </>
  )
}

export default Home
