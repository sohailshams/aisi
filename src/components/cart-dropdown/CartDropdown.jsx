import React from 'react'

const CartDropdown = () => {
  return (
    <div>
        <div className='absolute w-[240px] h-[340px] border-2 border-black top-20 right-4 z-40 bg-white flex flex-col'>
            <button className='bg-black py-2 px-2 text-slate-50 opacity-75 hover:bg-slate-50 hover:text-black drop-shadow-2xl ml-2 mr-2 mt-auto mb-2'>Checkout</button>
        </div>
    </div>
  )
}

export default CartDropdown