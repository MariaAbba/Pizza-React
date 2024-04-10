import React from 'react'

import data from '../constants/data'

const Categories = ({ value, onChangeCategory }) => {

  return (
    <div className="categories">
      <ul>
        {data.categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={i === value ? 'active' : null}
          >
            {categoryName.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories



 {
   /* <li onClick={() => chooseCategory(0)} className={category === 0 ? 'active' : ''}>Все</li>
        <li onClick={() => chooseCategory(1)} className={category === 1 ? 'active' : ''}>Мясные</li>
        <li onClick={() => chooseCategory(2)} className={category === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick={() => chooseCategory(3)} className={category === 3 ? 'active' : ''}>Гриль</li>
        <li onClick={() => chooseCategory(4)} className={category === 4 ? 'active' : ''}>Острые</li>
        <li onClick={() => chooseCategory(5)} className={category === 5 ? 'active' : ''}>Закрытые</li> */
 }