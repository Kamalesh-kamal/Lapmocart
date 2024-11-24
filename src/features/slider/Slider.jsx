import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import sliderImg1 from "../../images/img-1.png";
import sliderImg2 from "../../images/img-2.png";

/* eslint-disable no-unused-vars */
function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const slides = [{ url: sliderImg1 }, { url: sliderImg2 }];

  const handleInc = () => {
    setImageIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };
  const handleDec = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" flex justify-center items-center   h-[300px] lg:h-[600px]  ">
      <div
        style={{ backgroundImage: `url(${slides[imageIndex].url})` }}
        className="w-[290px] h-[160px] bg-center bg-cover rounded-xl duration-700 md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[1000px] xl:h-[500px]"
      ></div>
      <div className="absolute translate-y-[10px] ">
        <button onClick={handleDec}>
          <IoIosArrowDropleft
            className="bg-white
          rounded-full h-6 w-6 text-yellow-600 -translate-x-[130px] md:h-10 md:w-10 md:-translate-x-[280px] lg:-translate-x-[380px]
          xl:-translate-x-[480px]
           "
          />
        </button>
        <button onClick={handleInc}>
          <IoIosArrowDropright
            className="bg-white
          rounded-full h-6 w-6 text-yellow-600 translate-x-[130px] md:h-10 md:w-10 md:translate-x-[280px] lg:translate-x-[380px] xl:translate-x-[480px]"
          />
        </button>
      </div>
     
    </div>
  );
}

export default Slider;
