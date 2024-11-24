/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";
import { products } from "../../data/data";
import { useState } from "react";

function MobSortFilter({ id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("productsFilterBy") || "all"
  );
  const [selectedSortby, setSelectedSortby] = useState(
    searchParams.get("productsSortBy") || "name-asc"
  );

  const companies = {
    mobile: ["Redmi", "Oneplus"],
    laptop: ["HP", "Dell"],
  };

  const sortOptions = [
    { value: "name-asc", name: "Name-(A-Z)" },
    { value: "name-desc", name: "Name-(Z-A)" },
    { value: "rate-asc", name: "Price-low" },
    { value: "rate-desc", name: "Price-high" },
  ];

  function handleSortChange(sortvalue) {
    setSelectedSortby(sortvalue);
    searchParams.set("productsSortBy", sortvalue);
    setSearchParams(searchParams);
  }
  function handleFilterChange(filtervalue) {
    setSelectedFilter(filtervalue);
    searchParams.set("productsFilterBy", filtervalue);
    setSearchParams(searchParams);
  }

  return (
    <div className="h-[150svh] w-[100%] flex flex-col items-start p-5 gap-5 border absolute bg-black top-12 text-[#fff]">
      <div className="flex flex-col gap-1 justify-center ">
        <h1>FilterBy </h1>

        <label className="">
          <input
            type="checkbox"
            name="FilterBy"
            checked={selectedFilter === "all"}
            className=" cursor-pointer"
            onChange={() => handleFilterChange("all")}
            value="all"
          />
          All
        </label>
        {companies[id].map((company, i) => (
          <label key={i}>
            <input
              type="checkbox"
              name="FilterBy"
              checked={selectedFilter === company}
              className="cursor-pointer"
              onChange={() => handleFilterChange(company)}
              value={company}
            />
            {company}
          </label>
        ))}
      </div>
      <div className="flex flex-col justify-center  gap-1">
        <h1>SortBy</h1>
        {sortOptions.map((itm, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={selectedSortby === itm.value}
              name="sort"
              value={itm.value}
              className="cursor-pointer"
              onChange={() => handleSortChange(itm.value)}
            />
            {itm.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default MobSortFilter;
