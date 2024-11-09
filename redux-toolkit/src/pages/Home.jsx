import ImageContainer from "../components/ImageContainer";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const req = await fetch(`https://dummyjson.com/products?limit=50`);
  const data = await req.json();
  return data;
};

function Home() {
  const { products } = useLoaderData();

  return (
    <div className="custom-container">
      <div className="carousel w-full  rounded-xl m-10 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="./reklama.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="./reklama2.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="./reklama3.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
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
