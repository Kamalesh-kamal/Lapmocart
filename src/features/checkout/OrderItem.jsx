


import { formatCurrency } from "../../utilities/helpers";

/* eslint-disable react/prop-types */
function OrderItem({ item }) {
  const { name, img, price, quantity } = item;

  return (
    <div className="flex  flex-col ">
      <div className="flex flex-col gap-3  justify-between items-center shadow-md m-3 md:flex-row">
        <div className="h-68 w-60">
          <img src={img} alt={name} />
        </div>
        <div className="flex h-full w-full justify-around items-center">
          <h1 className="font-bold">{name}</h1>
          <h1>{formatCurrency(price)}</h1>
          <h1>x{quantity}</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
