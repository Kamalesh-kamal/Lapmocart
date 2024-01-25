/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Form, Link, redirect } from "react-router-dom";
import { getCart } from "../cart/cartSlice";
import { useState } from "react";
import { createOrder } from "../../services/apiProducts";

function CreateCheckout() {
  const cart = useSelector(getCart);

  const [details, setDetails] = useState({
    fullname: "",
    number: "",
    address: "",
    email: "",
  });

  function handleDetails(e) {
    const { name, value } = e.target;
    setDetails((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div className="w-full h-full shadow-md my-10">
      <Form method="POST">
        <div className="flex justify-center items-center flex-col gap-6 border-black h-full w-full my-5">
          <div className="flex gap-4">
            <label>E-mail</label>
            <input
              type="text"
              className="w-[200px] h-full border-2 border-gray rounded-full px-10 md:w-auto"
              name="email"
              value={details.email}
              onChange={handleDetails}
            />
          </div>
          <div className="flex gap-4">
            <label>Name</label>
            <input
              type="text"
              className="w-[200px] h-full border-2 border-gray rounded-full  px-10 md:w-auto"
              name="fullname"
              value={details.fullname}
              onChange={handleDetails}
            />
          </div>
          <div className="flex gap-4">
            <label>Number</label>
            <input
              type="text"
              className="w-[200px] h-full border-2 border-gray rounded-full  px-10 md:w-auto"
              name="number"
              value={details.number}
              onChange={handleDetails}
            />
          </div>
          <div className="flex gap-4">
            <label>Address</label>
            <input
              type="text"
              className="w-[200px] h-full border-2 border-gray rounded-full  px-10 md:w-auto"
              name="address"
              value={details.address}
              onChange={handleDetails}
            />
          </div>
          <div className="flex gap-4">
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          </div>
          <div>
            <button className="bg-sky-400 rounded-full text-stone-50 px-3 py-2">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  console.log(order);

  const newOrder = await createOrder(order);
  console.log(newOrder, newOrder.id);

  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateCheckout;
