import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart, getCartLength } from "../features/cart/cartSlice";

function Navbar() {
  const cartItems = useSelector(getCart);
  const totalCartItems = useSelector(getCartLength);

  return (
    <div className="flex  justify-between   gap-3  md:flex-row md:items-center md:mt-3 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      <NavLink to="/cart">
        {cartItems.length !== 0 ? (
          <p>
            Cart(
            <span className="text-sm text-blue-700">{totalCartItems}</span>)
          </p>
        ) : (
          "Cart"
        )}
      </NavLink>
    </div>
  );
}

export default Navbar;
