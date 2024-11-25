/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../cart/cartSlice";
import { useState } from "react";

function ProductItems({ item, setActive }) {
  // const { id, name, img, company, RAM, ROM, battery, rate, type, processor } =
  //   item;

  return (
    <div className="flex items-center justify-between mx-2">
      <div className=" w-[100%] md:w-[100%] grid grid-cols-4  items-center justify-between gap-3">
        {item.map((itm, i) => {
          return (
            <div
              key={i}
              className=" h-[250px] w-[80px] flex flex-col items-center justify-around px-2 shadow-md rounded-md  md:h-[200px] md:w-[200px]"
              onClick={() => setActive(itm.id)}
            >
              <img
                src={itm.img}
                alt={itm.name}
                className="h-[140px] w-[95px]"
              />
              <p className="font-semibold text-[14px] ">{itm.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductItems;
