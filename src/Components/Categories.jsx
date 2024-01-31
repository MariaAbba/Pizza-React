import React from 'react'

const Categories = () => {
  // const [category, setCategory] = React.useState('All')
  
  const [activeIndex, setActiveIndex] = React.useState(0)
  const categories = ['All', 'Meat', 'Chicken', 'Vegetarian', 'Hot']

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

  console.log(activeIndex)
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : null}
          >
            {value}
          </li>
        ))}
        {/* <li
          onClick={() => setCategory('All')}
          className={category === 'All' ? 'active' : null}
        >
          All
        </li>
        <li
          onClick={() => setCategory('Meat')}
          className={category === 'Meat' ? 'active' : null}
        >
          Meat
        </li>    */}
      </ul>
    </div>
  )
}

export default Categories
