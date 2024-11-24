import Slider from "../features/slider/Slider";
import Banner from "../features/banner/Banner";
import MobileSlider from "../features/slider/mobileSlider";
import LaptopSlider from "../features/slider/LaptopSlider";

function Home() {
  return (
    <div className="flex flex-col md:gap-10">
      <Banner />
      <Slider />
      <MobileSlider />
      <LaptopSlider />
    </div>
  );
}

export default Home;
