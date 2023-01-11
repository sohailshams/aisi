import React from 'react'

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

  return (
    <div className='relative w-full max-[500px]:max-w-[300px] max-[500px]:mx-auto'>
        <img src={imageUrl} alt={`${name}`} className='w-full h-[95%] cover'/>
        <div className='flex justify-between mt-2'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <div className='absolute bottom-10 left-[50%] translate-x-[-50%]'>
        <button className='bg-black py-2 px-2 text-slate-50 opacity-75 hover:bg-slate-50 hover:text-black drop-shadow-2xl'>Add to cart</button>
        </div>
    </div>    
  )
}

export default ProductCard