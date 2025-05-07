import ImageContainer from "../components/ImageContainer";
import { useLoaderData } from "react-router-dom";

//images import
import rek1 from "../assets/uzumrek1.jpg";
import rek4 from "../assets/uzumrek4.jpg";
import rek2 from "../assets/uzumrek2.jpg";
import rek3 from "../assets/uzumrek3.png";
export const loader = async () => {
  const req = await fetch(`https://dummyjson.com/products?limit=50`);
  const data = await req.json();
  return data;
};

function Home() {
  const { products } = useLoaderData();

  return (
    <div className="custom-container">
      <div className="carousel w-full  rounded-xl m-3 mx-auto h-[180px] sm:h-[220px] md:h-[33 0px] lg:h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="./reklama.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle bg-[rgba(255,255,255,0.19)] text-white "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={rek1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={rek4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={rek2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={rek3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  bg-[rgba(255,255,255,0.19)] text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[100vh ] custom-container ">
        {!products && <h1>Loading...</h1>}
        <ImageContainer products={products} />
      </div>
    </div>
  );
}

export default Home;
