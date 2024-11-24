/* eslint-disable no-unused-vars */
import { FaStar } from "react-icons/fa6";

function StarRating() {
  const starStyle = {
    color: "yellow",
    border: "1px solid yellow",
    padding: "5px",
  };
  return (
    <div className=" flex h-[50px] w-[90px]">
      {Array(5)
        .fill()
        .map((star, index) => (
          <FaStar key={index} style={{ color: index < 4 ? "yellow" : "gray" }} />
        ))}
    </div>
  );
}

export default StarRating;
