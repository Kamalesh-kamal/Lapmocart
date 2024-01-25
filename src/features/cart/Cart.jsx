import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart, getCartPrice, getCartQuantity } from "./cartSlice";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utilities/helpers";

function Cart() {
  const cart = useSelector(getCart);

  const totalQuantity = useSelector(getCartQuantity);

  const totalPrice = useSelector(getCartPrice);

  return (
    <>
      <Link
        to={"/products"}
        className="mx-2 underline decoration-solid text-sky-600"
      >
        ← Back to Products
      </Link>
      <div className="my-6 mx-5">
        {cart.length ? (
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          "Add some items to cart"
        )}

        <div className="flex flex-col justify-between items-start m-14 rounded-lg shadow-md md:flex-row md:p-3 ">
          <p>Total Items : {totalQuantity} </p>
          <p>Total Cost : {formatCurrency(totalPrice)}</p>

          <div>
            {cart.length ? (
              <Link to={"/order/new"}>
                <button
                  className="bg-sky-500 text-stone-50 rounded-full px-2 py-1"
                  d
                >
                  Checkout
                </button>
              </Link>
            ) : (
              <button className="hover:bg-sky-400 bg-sky-500 text-stone-50 rounded-full px-2 py-1 cursor-not-allowed	">
                Add Items
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
