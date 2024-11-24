import { Link } from "react-router-dom"
import bannerImg from "../../images/banner1.png"

function Banner() {
    return (
        <div className="flex justify-center items-center">
            <img src={bannerImg} alt="" className="h-[200px] w-[340px] rounded-xl md:w-[600px] md:h-[360px] lg:w-[800px] xl:w-[1000px] xl:h-[500px]" />
            <div>
        <Link to={"/products"}>
          <button className="absolute translate-y-[50px] -translate-x-[70px] bg-white text-gray-600 font-bold h-[20px] w-[50px] rounded-lg border-yellow-600 border-2 text-[10px] md:-translate-x-[150px] md:translate-y-[100px] md:h-[40px] md:w-[80px]
          md:text-lg md:rounded-full xl:translate-y-[100px] xl:-translate-x-[200px]
          xl:w-[120px] xl:h-[60px] xl:text-2xl ">
            Shop🛒
          </button>
        </Link>
      </div>
        </div>
    )
}

export default Banner
