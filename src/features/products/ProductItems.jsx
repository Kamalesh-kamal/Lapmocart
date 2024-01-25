/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../cart/cartSlice";

function ProductItems({ item }) {
  const { id, name, img, company, RAM, ROM, battery, rate, type, processor } =
    item;

  const dispatch = useDispatch();

  function handleAddCart() {
    const newCartItem = {
      id,
      img,
      name,
      quantity: 1,
      price: rate,
      totalPrice: rate * 1,
      // totalPrice will be static used for qnantity ++,--
    };
    dispatch(addItem(newCartItem));
  }

  const navigate = useNavigate();

  const cart = useSelector(getCart);

  const handleAddToCart = (currItem) => {
    const item = cart.find((itm) => currItem.id === itm.id);

    return !!item;
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-center  w-auto h-auto m-10 p-5  border-2  rounded-xl border-slate-100  bg-white hover:bg-stone-50 md:flex-row">
        <div className="flex  justify-center item-center object-cover  h-68 w-60 bg-white rounded-lg  ">
          <img
            src={img}
            alt="img"
            className=" object-cover w-full h-full rounded p-1"
          />
        </div>
        <div className="flex flex-col w-full h-full justify-between bg-white p-4 rounded-lg shadow-black text-center md:flex-row">
          <div className="flex flex-col w-auto h-auto">
            <h1 className="text-lg font-medium">{name}</h1>
            <p>{company}</p>
            <p>
              <span>{RAM.at(0)}</span>-<span>{ROM.at(0)}</span>
            </p>
            <p>{battery}</p>
            <p> {type === "laptop" ? processor : ""}</p>
          </div>

          <div
            className="flex flex-col
          justify-between items-center w-auto h-auto "
          >
            <div className="w-full h-full text-center m-3">
              <h1 className="text-lg font-medium">{formatCurrency(rate)}</h1>
            </div>
            <div className="flex flex-col  w-full justify-between items-center md:flex-row">
              <button
                className="bg-sky-400 rounded	text-stone-50 m-2 p-1"
                onClick={() => navigate(`/products/${id}`)}
              >
                View Product
              </button>
              {handleAddToCart(item) ? (
                <button
                  className="bg-red-500 rounded	text-stone-50 m-2 p-1"
                  onClick={()=>navigate('/cart')}
                >
                  Go To Cart
                </button>
              ) : (
                <button
                  className="bg-sky-400 rounded	text-stone-50 m-2 p-1"
                  onClick={handleAddCart}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
