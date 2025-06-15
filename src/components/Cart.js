import CartItemList from "./CartItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCartItem, removeCartItem } from "../utils/cartSlice";

const Cart = () => {
  // ! useDispatch
  const Dispatch = useDispatch();

  // ! useSelector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const handleClearCart = () => {
    Dispatch(clearCartItem());
  };

  const handleRemoveItem = (index) => {
    Dispatch(removeCartItem(index));
  }

  return (
    <>
      <div className="max-w-3xl mx-auto shadow-md rounded-xl m-7 p-5">
        <h1 className="text-center text-2xl font-medium">Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <CartItemList key={item.id} itemData={item} onRemove={() => handleRemoveItem(index)}/>;
          })
        ) : (
          <div className="text-center text-sm font-sm">No Items in Cart</div>
        )}
      </div>
      <div className="fixed bottom-2 right-2">
        <button
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart ({cartItems.length})
        </button>
      </div>
    </>
  );
};

export default Cart;
