

import { getItems } from "../../services/apiProducts";
import ProductItems from "./ProductItems";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Filter from "../filter/filter";
import SortBy from "../sort/SortBy";
import { useMemo } from "react";

function Product() {
  const items = useLoaderData();

  

  const [searchParams] = useSearchParams();

  // for filter

  const filteredvalue = searchParams.get("productsFilter") || "all";

  const filteredItems = useMemo(() => {
    if (filteredvalue === "all") {
      return items;
    } else if (filteredvalue === "mobiles") {
      return items.filter((itm) => itm.type === "mobile");
    } else if (filteredvalue === "laptops") {
      return items.filter((itm) => itm.type === "laptop");
    }
  }, [filteredvalue, items]);

  // for sort
  const sortedValue = searchParams.get("productsSortBy") || "name-asc";
  const [value, direction] = sortedValue.split("-");
 
  const modifier = direction === "asc" ? 1 : -1;

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const aValue = a[value];
      const bValue = b[value];

      if (aValue < bValue) {
        return -1 * modifier;
      }
      if (aValue > bValue) {
        return 1 * modifier;
      }
      return 0;
    });
  }, [filteredItems, value, modifier]);


  return (
    <div>
      <div className="flex justify-between  mt-1 px-5 py-3 shadow-md bg-stone-50 rounded-xl  ">
        <Filter />
        <SortBy />
      </div>
      <div>
        {sortedItems.map((item) => (
          <ProductItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const items = await getItems();
  return items;
}

export default Product;
