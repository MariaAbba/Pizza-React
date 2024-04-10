import React from 'react'
import images from './../constants/images'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Your Basket is Empty</h2>
        <p>
          You have not selected an item. Please return to the main page in order
          to choose an item.
        </p>
        <img src={images.emptyCart} alt="cart" />
        <Link to="/" className="button button--black">
          <span>Go Back</span>
        </Link>
      </div>
    </>
  )
}

export default CartEmpty
