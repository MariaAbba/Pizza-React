// import { useState } from 'react';
import Categories from './Components/Categories'
import Header from './Components/Header'
import PizzaBlock from './Components/PizzaBlock'
import Sort from './Components/Sort'

import pizzas from './assets/pizzas.json'
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            {pizzas.map((obj, i) => (
              <PizzaBlock
                key={i}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                // {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
