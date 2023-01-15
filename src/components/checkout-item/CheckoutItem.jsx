import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";


const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemCompletely } = useContext(CartContext);

    const { name, imageUrl, price, quantity } = cartItem;

    // Product count increment function
    const addItemHandler = () => addItemToCart(cartItem);

    // Product count decrement function
    const removeItemHandler = () => removeItemFromCart(cartItem);

    // A function to remove a procudt completely from checkout page
    const removeItemCompletelyHandler = () => clearItemCompletely(cartItem);

  return (
    <div>
    <div className="flex justify-between py-4 items-center w-[50%] mx-auto max-[640px]:w-full">
        <img className="w-[80px] h-[90px]" src={imageUrl} alt={`${name}`} />
        <div>
            <h1 className="font-semibold w-30 max-[425px]:w-20">{name}</h1>
            <div className="flex items-center">
                <span className="text-2xl font-bold cursor-pointer" onClick={addItemHandler}>&#x2b;</span>
                <span className="font-bold pl-1">|</span>
                <span className="text-2xl font-bold pl-1 cursor-pointer" onClick={removeItemHandler}>&minus;</span>
            </div>
        </div>
        <div className="font-semibold">{quantity}</div>
        <div className="font-semibold">{price}</div>
        <div className="font-semibold cursor-pointer" onClick={removeItemCompletelyHandler}>&#10005;</div>
    </div>
      <hr className="w-[70%] mx-auto" />
    </div>
  )
}

export default CheckoutItem;