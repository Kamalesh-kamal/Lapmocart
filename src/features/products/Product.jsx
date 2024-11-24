/* eslint-disable no-unused-vars */
import { getItems } from "../../services/apiProducts";
import ProductItems from "./ProductItems";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { products, productsType } from "../../data/data";

function Product() {
  return (
    <div className="flex flex-col items-center  justify-between gap-3  ">
      <div>
        <h1 className="text-[20px] underline decoration-double md:text-[30px]">CHOOSE THE PRODUCT</h1>
      </div>
      <div className="w-full h-[80vh] flex flex-col gap-3 justify-around items-center mb-10 md:flex-row">
        {productsType.map((itm, i) => {
          return (
            <Link
              to={`/products/${itm.id}`}
              id={itm.id}
              className="flex flex-col items-center shadow-sm border-2 shadow-black p-[20px]"
              key={i}
            >
              <img
                src={itm.img}
                alt={itm.type}
                className="h-[250px] w-[200px]"
              />
              <p className="font-bold">{itm.type}</p>
            </Link>
          );
        })}
      </div>
    </div>
    //     <div>
    // <h1 className="font-bold mb-6 text-center">WELCOME TO <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-50 ">LAPMOCART</span> ENJOY 🛒!</h1>
    //       <div className="flex justify-between px-5 py-3 shadow-md bg-stone-50 rounded-xl  ">
    //         <Filter />
    //         <SortBy />
    //       </div>
    //       <div>
    //         {sortedItems.map((item) => (
    //           <ProductItems item={item} key={item.id} />
    //         ))}
    //       </div>
    //     </div>
  );
}

export async function loader() {
  const items = await getItems();
  return items;
}

export default Product;
