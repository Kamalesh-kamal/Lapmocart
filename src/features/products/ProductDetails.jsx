/* eslint-disable no-unused-vars */

import {
  Link,
  useLoaderData,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getItems } from "../../services/apiProducts";
import { useState } from "react";
import { formatCurrency } from "../../utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getCart } from "../../features/cart/cartSlice";
import StarRating from "../../starrating/StarRating";
import ProductItems from "./ProductItems";
import { RiDeleteBinLine } from "react-icons/ri";
import SortFilter from "../sortfilter/SortFilter";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import MobSortFilter from "../sortfilter/MobSortFilter";

/* eslint-disable react/prop-types */
function ProductDetails() {
  const [Active, setActive] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(true);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const selected = data.find((itm) => itm.id === Active);
  const selectedItm = [selected];

  // filters the products according to selected type (mobile or laptop)
  const filteredProduct = data.filter((itm) => itm.type === id);

  // Retrieve filter and sort parameters
  const filterBy = searchParams.get("productsFilterBy") || "all";
  const sortBy = searchParams.get("productsSortBy") || "name-asc";

  // Filtered products
  const filteredProducts = filteredProduct.filter((product) => {
    return filterBy === "all" || product.company === filterBy;
  });
  // Sorted products
  const [sortField, sortOrder] = sortBy.split("-");
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return a[sortField] < b[sortField] ? -1 * order : 1 * order;
  });

  // Paginated products
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, lastIndex);

  // first item
  const firstProduct = filteredProduct.at(0);
  console.log("firstProduct", firstProduct);

  // adding product to cart
  const getCartId = (itm) => {
    dispatch(addItem(itm));
  };

  const uniqueCompanies = filteredProduct.reduce((acc, product) => {
    if (!acc.includes(product.company)) {
      acc.push(product.company);
    }
    return acc;
  }, []);

  return (
    <div className="w-[100%] flex justify-between">
      {!visible && (
        <div
          onClick={() => {
            setVisible((prev) => !prev);
            setShow((prev) => !prev);
          }}
        >
          <button className="bg-blue-500 text-[#fff] px-5 py-1 rounded-2xl flex absolute z-10 right-0  md:hidden">
            filter&Sort
          </button>
        </div>
      )}
      <div className="hidden md:block md:w-[20%]">
        <SortFilter data={filteredProducts} uniqueCompanies={uniqueCompanies} />
      </div>
      {visible && (
        <div className="block md:hidden overflow-y-hidden ">
          <MobSortFilter
            uniqueCompanies={uniqueCompanies}
            visible={visible}
            setShow={setShow}
            setVisible={setVisible}
            data={filteredProducts}
          />
        </div>
      )}
      {show && (
        <div className="h-[100vh] w-[100%] flex flex-col items-center justify-around gap-5 mx-5 md:w-[70%]">
          <div className="flex  items-center justify-center ">
            {selected ? (
              selectedItm.map((itm, i) => {
                const existedItm = cart.find((item) => item.id === itm.id);
                console.log("existedItm", existedItm);

                return (
                  <div
                    key={i}
                    className="h-[100svh] w-[100%] flex flex-col items-center justify-center border-2  shadow-sm shadow-black p-5 mt-10 md:flex-row md:mt-0 md:h-[50vh]"
                  >
                    <div className="w-[50%] h-[100%] flex flex-col items-center justify-between">
                      <div className="h-[95%] md:h-[100%]">
                        <img
                          src={itm.img}
                          alt={itm.name}
                          className="h-[100%] w-[190px] md:h-[100%]"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col w-[80%] h-[100%] text-justify gap-1">
                      <div className=" flex justify-betwe gap-3">
                        <h1 className="font-bold">{itm.name}</h1>
                        <StarRating />
                      </div>

                      <p className="bg-blue-500 text-[#fff] px-5 py-1 rounded-2xl w-[100px]">
                        {formatCurrency(itm.rate)}
                      </p>

                      {itm.type === "mobile" ? (
                        <h2>
                          <span className="font-semibold italic">
                            {itm.name}
                          </span>{" "}
                          provided by{" "}
                          <span className="font-semibold italic">
                            {itm.company}
                          </span>{" "}
                          is powered by{" "}
                          <span className="font-semibold italic">
                            {itm.processor}
                          </span>
                          processor for super fast gaming experience without any
                          lag and contains{" "}
                          <span className="font-semibold italic">
                            {itm.battery}
                          </span>{" "}
                          massive battery which will last long upto 1 full day &
                          also comes with{" "}
                          <span className="font-semibold italic">
                            {" "}
                            {itm.RAM.at(0)}
                          </span>{" "}
                          RAM &{" "}
                          <span className="font-semibold italic">
                            {itm.ROM.at(0)}
                          </span>{" "}
                          ROM.
                        </h2>
                      ) : (
                        <h2>
                          The{" "}
                          <span className="font-semibold italic">
                            {itm.name}
                          </span>{" "}
                          by{" "}
                          <span className="font-semibold italic">
                            {itm.company}
                          </span>
                          , equipped with a{" "}
                          <span className="font-semibold italic">
                            {itm.processor}
                          </span>
                          . Featuring an{" "}
                          <span className="font-semibold italic">
                            {" "}
                            {itm.GraphicCard}
                          </span>{" "}
                          graphics card, It comes pre-installed with{" "}
                          <span className="font-semibold italic">
                            {" "}
                            {itm.OperatingSystem}
                          </span>
                          , includes{" "}
                          <span className="font-semibold italic">
                            {" "}
                            {itm.RAM.at(0)}
                          </span>{" "}
                          RAM for seamless multitasking, and offers{" "}
                          <span className="font-semibold italic">
                            {" "}
                            {itm.ROM.at(0)}
                          </span>{" "}
                          storage, providing ample space and fast access to
                          files.
                        </h2>
                      )}
                      <div className="">
                        {existedItm ? (
                          <div className="flex gap-4">
                            <Link
                              to={"/cart"}
                              className="bg-blue-500 text-[#fff] px-5 py-1 rounded-2xl"
                            >
                              Go to cart
                            </Link>
                            <button
                              className="bg-blue-500 text-[#fff] px-5 py-1 rounded-2xl"
                              onClick={() => dispatch(deleteItem(itm.id))}
                            >
                              <RiDeleteBinLine />
                            </button>
                          </div>
                        ) : (
                          <button
                            className="bg-blue-500 text-[#fff] px-5 py-1 rounded-2xl"
                            onClick={() => getCartId(itm)}
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-[50svh] w-[100%] flex  items-center justify-center shadow-sm shadow-black p-3 md:w-[100%] ">
                <div className="flex  flex-col items-center justify-between gap-5 md:flex-row">
                  <img
                    src={firstProduct.img}
                    alt={firstProduct.name}
                    className="h-[200px] w-[180px]"
                  />
                  <p className="font-semibold italic underline">
                    Selected product to appears here🛒
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <ProductItems item={paginatedProducts} setActive={setActive} />
            </div>
            <div className="flex justify-between items-center gap-1 mb-5">
              {currentPage < 2 ? (
                <button
                  className="bg-blue-100 text-[#fff] px-3 py-1 rounded-full"
                  disabled={true}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <FaArrowLeft />
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-[#fff] px-3 py-1 rounded-full"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <FaArrowLeft />
                </button>
              )}
              <h1 className="bg-blue-500 text-[#fff] px-3 py-1 rounded-full">
                {currentPage}
              </h1>
              {filteredProducts.length < 5 ||
              paginatedProducts.length % 4 !== 0 ? (
                <button
                  disabled={true}
                  className="bg-blue-100 text-[#fff] px-3 py-1 rounded-full"
                >
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-[#fff] px-3 py-1 rounded-full"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function loader() {
  const data = await getItems();
  return data;
}

export default ProductDetails;
