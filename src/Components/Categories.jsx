import React from 'react'

const Categories = ({value, clickOnCategory}) => {
  const categories = ['All', 'Meat', 'Chicken', 'Vegetarian', 'Hot']

  // const onClickCategory = (index) => {
  //   setActiveIndex(index)
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => clickOnCategory(i)}
            className={value === i ? 'active' : null}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
