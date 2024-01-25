import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="mx-0 w-[110px]lg:w-[200px]">
      <Link to="/">
        <h1 className="bg-gray-500 text-white p-2 rounded-sm m-2 font-mono tracking-wider 	font-light text-sm :">
          LAPMOCART
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
