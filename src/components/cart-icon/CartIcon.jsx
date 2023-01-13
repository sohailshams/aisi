import { useContext } from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  // Get isCartOpen & setIsCartOpen from the CartContext
  const { isCartOpen, setIsCartOpen, totalCartItems } = useContext(CartContext);

  // A function to open and close cart dropdown
  const cartToggleHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='flex items-center justify-center cursor-pointer relative' onClick={cartToggleHandler}>
        <ShoppingCartIcon className='w-6 h-6' />
        <span className='absolute top-[.5px]'>{totalCartItems}</span>
    </div>
  )
}

export default CartIcon