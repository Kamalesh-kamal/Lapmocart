

import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getItems } from "../../services/apiProducts";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../../features/cart/cartSlice";

/* eslint-disable react/prop-types */
function ProductDetails() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  console.log(id);

  useEffect(() => {
    if (id && data) {
      const items = data.find((item) => item.id === id);
      console.log(items);
      setProduct(items);
    }
  }, [id, data]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    name,
    img,
    rate,
    type,
    model,
    RAM,
    ROM,
    processor,
    battery,
    camera,
    "Graphic Card": graphicCard,
    "Operating System": operatingSystem,
    display,
  } = product;

  function handleAddItem() {
    const newCartItem = {
      id,
      img,
      quantity: 1,
      price: rate,
      totalPrice: rate * 1,
    };
    dispatch(addItem(newCartItem));
  }

  const items = useSelector(getCart);
  const handleAddToCart = () => items.some((item) => item.id === id);

  return (
    <>
      <div className="flex flex-col-reverse justify-between items-start w-auto h-auto p-5">
        <h1 className="font-mono font-bold">Specs Of the Product {name}</h1>
        <button
          className="bg-white- rounded p-1 underline decoration-solid text-sky-600"
          onClick={() => navigate("/products")}
        >
          ← back
        </button>
      </div>
      <div className="w-auto h-auto">
        <div className="flex justify-center items-center object-cover  h-auto w-auto  ">
          <img
            src={img}
            alt="img"
            className=" object-cover  rounded h-68 w-60 "
          />
        </div>
        <div className="flex  justify-between p-5 items-center h-auto w-auto ">
          <h1>{name}</h1>
          {handleAddToCart() ? (
            <button
              className="bg-red-400 text-stone-50 p-2 rounded"
              onClick={()=>navigate('/cart')}
             
            >
              Go To Cart
            </button>
          ) : (
            <button
              className="bg-sky-400 text-stone-50 p-2 rounded"
              onClick={handleAddItem}
            >
              add to cart
            </button>
          )}
        </div>
        <div>
          <h1 className="font-bold text-lg mx-3">{formatCurrency(rate)}</h1>
        </div>
        {/* for laptop */}
        {type === "laptop" && (
          <>
            <div className="px-3 m-3">
              <h1 className=" underline font-mono decoration-solid">
                Highlights
              </h1>
              <p>{model !== "" ? `${name}-${model}` : `${name}`}</p>
            </div>

            <div className="bg-white shadow-black shadow-sm m-3 p-6 rounded-lg">
              <ul className="list-disc">
                <li>{processor} processor</li>
                <li>{graphicCard} grpahics</li>
                <li>{operatingSystem}</li>
                <li>{display} display </li>
                <li>{RAM} RAM</li>
                <li>{ROM} Hard Drive</li>
                <li>{camera} camera</li>
              </ul>
            </div>
          </>
        )}
        {/* for mobile */}
        {type === "mobile" && (
          <>
            <div className="p-3">
              <h1 className=" underline decoration-solid font-mono">
                Highlights
              </h1>
              <p>{name}</p>
            </div>
            <div className="bg-white shadow-black shadow-sm m-3 p-6 rounded-lg">
              <ul className="list-disc">
                <li>
                  {RAM.at(0)}RAM-{ROM.at(0)}ROM
                </li>
                <li>{processor.join(" | ")}</li>
                <li>{battery}</li>
                <li>front-camera-{camera["front-camera"]}</li>

                <li>back-camera-{camera["back-camera"]}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export async function loader() {
  const data = await getItems();
  return data;
}

export default ProductDetails;
