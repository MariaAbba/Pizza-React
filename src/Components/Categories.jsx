import React from 'react'

import data from '../constants/data'

const Categories = ({ value, onChangeCategory }) => {

  return (
    <div className="categories">
      <ul>
        {data.categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : null}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories

