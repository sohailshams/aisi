import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className='flex items-center justify-center cursor-pointer relative'>
        <ShoppingCartIcon className='w-6 h-6' />
        <span className='absolute top-[.5px]'>0</span>
    </div>
  )
}

export default CartIcon