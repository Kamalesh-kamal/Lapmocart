/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { getItems } from "../../services/apiProducts";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../data/data";

function LaptopSlider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const data = await getItems();

      setItems(data);
    }

    getProducts();
  }, []);

  console.log(items);

  const laptopData = products.filter((item) => item.type === "laptop");
  console.log(laptopData);
  // const laptopData = items.filter((item) => item.type === "laptop");
  // console.log(laptopData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className=" m-5 h-[300px] md:h-[400px]">
        <div>
            <h1 className="font-bold text-center lg:text-2xl">LATEST LAPTOPS FOR GAMING AND OTHERS</h1>
        </div>
      <Slider {...settings}>
        {laptopData.map((data) => (
          <div key={data.id} className=" shadow-md">
            <div className="flex items-center">
              <img
                src={data.img}
                alt={data.name}
                className="w-[250px] h-[180px] md:h-[300px] lg:ml-7 xl:ml-[90px] "
              />
            </div>
            <div className="flex flex-col justify-between items-center">
              <h1 className="font-semibold text-[8px] md:text-[12px] lg:text-[20px] lg:w-full lg:text-center">{data.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default LaptopSlider;
