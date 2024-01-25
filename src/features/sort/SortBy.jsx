import { useSearchParams } from "react-router-dom";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("productsSortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h1>SortBy</h1>
      <select
        name="sortby"
        className="border-sky-400 border-2 rounded-3xl"
        onChange={handleChange}
        value={searchParams.get("productsSortBy") || "name-asc"}
      >
        <option value="name-asc">Name-(A-Z)</option>
        <option value="name-desc">Name-(Z-A)</option>
        <option value="rate-asc">Price-low</option>
        <option value="rate-desc">Price-high</option>
      </select>
    </div>
  );
}

export default SortBy;
