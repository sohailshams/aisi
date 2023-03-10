import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/CartItem"


const CartDropdown = () => {
    const { cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    // A function that that navigates to checkout page 
    const navigateToCheckHandler = () => {
      navigate('/checkout');
    }

  return (
    <div>
        <div className='absolute w-[240px] h-[340px] border-2 border-black top-20 right-4 z-40 bg-white flex flex-col overflow-y-auto'>
            <div className="ml-4 mb-4">
                { cartItems.length ? (
                  cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                  ) : (
                    <p className="pl-10 absolute top-[40%] font-semibold">Your cart is empty</p> 
                    )
                
              }
            </div>
            { cartItems.length ? (
              <button className='bg-black py-2 px-2 text-slate-50 opacity-75 hover:bg-slate-50 hover:text-black drop-shadow-2xl ml-2 mr-2 mt-auto mb-2' onClick={navigateToCheckHandler}>Checkout</button>
                ) : (
                    ''
                  )
            }
        </div>
    </div>
  )
}

export default CartDropdown;