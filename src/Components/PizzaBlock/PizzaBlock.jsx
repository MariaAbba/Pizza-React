import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from '../../redux/slices/cartSlice'
const typeNames = ['Thin-Crust', 'Thick-Crust']

const PizzaBlock = ({ id, title, price, image, sizes, types, rating }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  )

  const [crustSize, setCrustSize] = React.useState(0)
  const [pizzaSize, setPizzaSize] = React.useState(0)

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
      type: typeNames[crustSize],
      size: pizzaSize,
    }
    dispatch(addItem(item))
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setCrustSize(type)}
              className={crustSize === type ? 'active' : null}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setPizzaSize(i)}
              className={pizzaSize === i ? 'active' : ''}
            >
              {size}sm{' '}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from ${price}</div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add to Order</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  )
}

// PizzaBlock.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
//   types: PropTypes.arrayOf(PropTypes.number).isRequired,
// }
export default PizzaBlock
