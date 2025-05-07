//react-icons
import { BsBagPlus } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

//redux
import { useDispatch, useSelector } from "react-redux";
//function from likedSlice
import { addLike, addToBasket } from "../slices/LikedSlice";
import { Link } from "react-router-dom";

function Image({ product, added }) {
  console.log(product);
  const dispatch = useDispatch();
  const { toggleButton } = useSelector((state) => state.Liked);

  const addLikedImages = (e) => {
    e.preventDefault();
    dispatch(addLike(product));
  };

  const addBasket = (e) => {
    e.preventDefault();
    dispatch(addToBasket({ ...product, amount: 1 }));
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className=" card rounded-xl overflow-hidden bg-slate-50 group relative shadow-md hover:shadow-lg transition-shadow duration-200 "
      key={product.id}
    >
      <span
        onClick={addBasket}
        className="inline-flex justify-center focus:bg-slate-600 items-center cursor-pointer w-10 h-10 rounded-full bg-slate-50 border-2 border-gray-300 hover:bg-slate-100 absolute bottom-2 right-2 z-10"
      >
        <BsBagPlus className="w-5 h-5 text-orange-700" />
      </span>
      <div className="card  box-border">
        <div className="inline-flex  justify-center items-center relative  bg-gray-200 rounded-xl">
          <img
            src={product.images[0]}
            alt=""
            className="w-[200px] h-[250px] group-hover:scale-105 transition-all duration-300"
          />
          {!added && (
            <span
              onClick={addLikedImages}
              className="hidden  group-hover:inline-flex transition-all duration-300 cursor-pointer justify-center items-center absolute top-3  right-3 text-xl w-8 h-8 border border-white rounded-full bg-gray-200 text-white"
            >
              <IoIosHeart />
            </span>
          )}

          {added && (
            <span
              onClick={addLikedImages}
              className="hidden  group-hover:inline-flex transition-all duration-300 cursor-pointer justify-center items-center absolute top-3  right-3 text-xl w-8 h-8 border border-red-500 rounded-full bg-gray-200 text-red-500"
            >
              <IoIosHeart />
            </span>
          )}
          <span className="px-2 text-slate-50 bg-orange-600 rounded-md absolute inline-block bottom-1 left-1 text-[12px] ">
            On Sale!
          </span>
        </div>
        <div className="card-info bg-slate-50 px-4 py-2 flex flex-col justify-between gap-5 h-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-[18px] font-semibold text-black">
              {product.title}
            </h1>
            <p className="flex items-center gap-2">
              <MdStar className="text-orange-300" />
              <span className="bg-yellow-200 rounded-xl px-2 ">
                {" "}
                {product.rating}
              </span>{" "}
              <span className="text-red-500">(in stock {product.stock})</span>
            </p>
          </div>
          <div>
            <p className="text-[10px] md:text-[11px] lg:text-[12px] text-green-700">
              {product.returnPolicy} | {product.warrantyInformation}
            </p>
          </div>

          <div>
            <h1 className="text-gray-400 text-[14px] line-through">
              {product.price}$
            </h1>
            <h1 className="font-bold text-lg ">
              {parseFloat(
                product.price -
                  product.price * (product.discountPercentage / 100)
              ).toFixed(2)}{" "}
              $
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Image;
