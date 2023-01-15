import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, totalPrice} = useContext(CartContext);

  return (
    <div className=" px-[40px] py-[20px]">
        <h2 className="mb-4 text-xl font-bold">Checkout</h2>
        <hr className="mt-4" />
        <hr className="w-[70%] mx-auto" />
        {cartItems.map((cartItem) => {
            return (<div key={cartItem.id}>
               <CheckoutItem cartItem={cartItem} />
                </div>)
        })}
        
        <h1 className="w-[70%] mx-auto text-right mt-4 font-bold md:pr-[18%] lg:pr-[19%] xl:pr-[20%] max-[375px]:mr-[35px] max-[375px]:mr-[25px]">Total: ${totalPrice}</h1>
    </div>
  )
}
export default Checkout;