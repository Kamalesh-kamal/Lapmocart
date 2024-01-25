import Slider from "../features/slider/Slider";
import Banner from "./Banner";

function Home() {
  return (
    <div className="flex flex-col md:gap-10">
      <Banner />
      <Slider />
    </div>
  );
}

export default Home;
