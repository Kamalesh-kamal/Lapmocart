
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    searchParams.set("productsFilter", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <h1>FilterBy </h1>
      <select
        name="FilterBy"
        className="border-sky-400 border-2 rounded-3xl"
        onChange={handleClick}
        value={searchParams.get("productsFilter") || "all"}
      >
        <option value="all">All</option>
        <option value="mobiles">Mobiles</option>
        <option value="laptops">Laptops</option>
      </select>
    </div>
  );
}

export default Filter;
