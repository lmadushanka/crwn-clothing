import React from 'react';
import './cart-item.styles.scss';

function CartItem({cartItem}) {

    const {name, quantity, imageUrl, price} = cartItem
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
          <span className='name'>{name}</span>
          <span className='price'>{quantity} x LKR {price}</span>
        </div>
    </div>
  )
}

export default CartItem