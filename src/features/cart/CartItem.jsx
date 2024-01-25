/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import { decreaseItemQuantity, deleteItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { increaseItemQuantity } from "./cartSlice";


function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, img, name, price, quantity } = item;

  function handleDeleteCart() {
    dispatch(deleteItem(id));
  }

  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/products/${id}`, { replace: true });
  }

  function handleIncrement() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecrement() {
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <div className="flex flex-col justify-between   items-center m-5 bg-white shadow-md p-3 hover:bg-slate-50 border-slate-50 rounded-lg md:flex-row ">
      <div
        className="flex justify-between items-center gap-4"
        onClick={handleNavigation}
      >
        <img src={img} alt={name} className="h-20" />
        <h1>{formatCurrency(price)}</h1>
      </div>

      <div className="flex justify-between items-center gap-3 ">
        {quantity === 1 ? (
          <button
            className="bg-sky-200 m-2  w-7 h-7 rounded-full "
            onClick={handleDecrement}
            disabled={true}
          >
            -
          </button>
        ) : (
          <button
            className="bg-sky-400 m-2  w-7 h-7 rounded-full"
            onClick={handleDecrement}
          >
            -
          </button>
        )}
        {quantity}
        {quantity === 3 ? (
          <button
            className="bg-sky-200 m-2  w-7 h-7 rounded-full"
            onClick={handleIncrement}
            disabled={true}
          >
            +
          </button>
        ) : (
          <button
            className="bg-sky-400 m-2  w-7 h-7 rounded-full"
            onClick={handleIncrement}
          >
            +
          </button>
        )}
        <div>
          <button
            onClick={handleDeleteCart}
            className="bg-red-500 rounded-full p-2 text-stone-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
