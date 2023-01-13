
const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="w-full flex mt-4">
      <img className="w-[30%]" src={imageUrl} alt={`${name}`} />
      <div className="flex flex-col w-[70%] items-center justify-center">
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem