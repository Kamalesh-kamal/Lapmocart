import { Link, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiProducts";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import { getCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function Checkout() {
  const order = useLoaderData();

  const totalPrice = useSelector(getCartPrice);

  const { id, fullname: name, number, address, cart } = order;
  return (
    <div className="flex flex-col gap-10">
       <div>
        <Link
        to={"/products"}
        className="mx-2 underline decoration-solid text-sky-600"
      >
        ← Back to Products
      </Link>
        </div>
      <div className="flex flex-col justify-center items-center gap-5 h-full w-full ">
       
        <h1>
          <span>ORDER #{id} STATUS</span>{" "}
        </h1>
        <h1>
          {" "}
          YOUR ORDER WAS{" "}
          <span className="text-green-400 underline">SUCCESSFULL</span>{" "}
        </h1>
        <h1>
          <span className="font-semibold text-xl uppercase">{name}</span> , YOUR
          ORDERS
        </h1>
      </div>
      <div className="my-14">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center w-full h-full ">
        <table className="border-collapse   w-5/6 ">
          <thead>
            <th className="py-2 px-4 border border-gray-300">TOTAL PRICE</th>
            <th className="py-2 px-4 border border-gray-300">Payment Type</th>
            <th className="py-2 px-4 border border-gray-300">
              Customer Details
            </th>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300">
                {formatCurrency(totalPrice)}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                Cash On Delivery
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <span>
                  {name}, mobile:{number}, address:{address}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex  justify-center items-center">
        <h1 className="flex justify-center items-center  border-green-500 border-2 px-8">Order Will Be Delivered Within 4 WorkingDays</h1>
      </div>
    </div>
  );
}

export default Checkout;

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
