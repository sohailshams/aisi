import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);


  return (
    <div className='relative max-w-[400px] max-[500px]:max-w-[300px] max-[500px]:mx-auto h-[400px]'>
        <img src={imageUrl} alt={`${name}`} className='w-full h-full cover'/>
        <div className='flex justify-between mt-2'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <div className='absolute bottom-10 left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <button className='bg-black py-2 px-2 text-slate-50 opacity-75 hover:bg-slate-50 hover:text-black drop-shadow-2xl' onClick={addProductToCart}>Add to cart</button>
        </div>
    </div>    
  )
}

export default ProductCard;