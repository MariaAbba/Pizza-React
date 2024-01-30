import React from 'react'

const Categories = () => {
  const [category, setCategory] = React.useState('All')
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setCategory('All')}
          className={category === 'All' ? 'active' : ''}
        >
          All
        </li>
        <li
          onClick={() => setCategory('Meat')}
          className={category === 'Meat' ? 'active' : null}
        >
          Meat
        </li>
        <li
          onClick={() => setCategory('Chicken')}
          className={category === 'Chicken' ? 'active' : null}
        >
          Chicken
        </li>
        <li
          onClick={() => setCategory('Vegetarian')}
          className={category === 'Vegetarian' ? 'active' : null}
        >
          Vegetarian
        </li>
        <li
          onClick={() => setCategory('Hot')}
          className={category === 'Hot' ? 'active' : null}
        >
          Hot
        </li>
      </ul>
    </div>
  )
}

export default Categories
