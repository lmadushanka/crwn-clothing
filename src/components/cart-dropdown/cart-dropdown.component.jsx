import './cart-dropdown.styles.scss';
import Button from '../button/button.component';


import React from 'react'

function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-item'/>
        <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown