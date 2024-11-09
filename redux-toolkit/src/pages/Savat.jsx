//react-icon
import { MdDelete } from "react-icons/md";

import { increment, decrement, removeItem } from "../slices/LikedSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Savat() {
  const dispatch = useDispatch();
  const { toBasket, price, allDiscount } = useSelector((state) => state.Liked);

  const arraylength = toBasket.length;
  return (
    <>
      {toBasket && (
        <div className="px-[5%]  min-h-[85vh] flex md:my-10 bg-slate-50 w-full">
          <div className="w-[100%]  md:p-5 ">
            <h1 className="text-2xl font-semibold ">
              Your Basket,{" "}
              <span className="text-gray-400">{arraylength} products</span>
            </h1>
            <div className="border-2 rounded-lg md:px-5 md:py-5">
              {arraylength == 0 && (
                <h1 className="text-xl font-semibold">
                  You didn't choose any products!
                </h1>
              )}
              {toBasket.map((product) => {
                let count = parseFloat(
                  product.price -
                    product.price * (product.discountPercentage / 100)
                ).toFixed(2);

                return (
                  <div
                    key={product.id}
                    className="w-full flex flex-col gap-1 md:gap-4  px-3 bg-white  rounded-lg  md:mt-10 "
                  >
                    <p className="text-sm text-green-600">
                      In stock Uzum Market
                    </p>
                    <h1 className="text-md md:text-xl font-bold text-indigo-800">
                      Delivered on November 6th
                    </h1>
                    <div className="flex  md:p-4 py-4 border-b-2">
                      <div className="w-[20%]   flex items-center justify-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 hidden md:block"
                        />
                        <div className="bg-slate-800 rounded-md w-full mr-4">
                          <img
                            src={product.thumbnail}
                            alt=""
                            className="w-full md:w-24 md:h-32"
                          />
                        </div>
                      </div>
                      <div className="w-[80%]  flex flex-col relative ">
                        <div className="flex md:h-[50%] justify-end">
                          <h1 className="hidden md:block text-xl font-serif font-medium w-[80%] ">
                            {product.title}
                          </h1>
                          <span
                            onClick={() => dispatch(removeItem(product.id))}
                            className="inline-flex w-[20%] items-center justify-center text-lg font-semibold text-orange-500 hover:text-orange-700 cursor-pointer"
                          >
                            <MdDelete className="w-7 h-7" /> Delete
                          </span>
                        </div>
                        <div className="flex gap-4 flex-col md:flex-row justify-start md:justify-between items-start md:items-center h-full md:h-[50%] w-full md:w-[70%] ">
                          <div>
                            <h1>
                              <span className="text-gray-400 font-semibold text-sm md:text-md">
                                Category:{" "}
                              </span>
                              <span className="font-semibold">
                                {product.category}
                              </span>
                            </h1>
                            <h1>
                              <span className="text-gray-400 font-semibold text-sm md:text-md">
                                Brand:{" "}
                              </span>
                              <span className="font-semibold">
                                {product.brand}
                              </span>
                            </h1>
                          </div>
                          <div className="flex gap-3 text-xl px-3 py-2 border rounded-md border-gray-800 text-gray-500 ">
                            <button
                              type="button"
                              onClick={() => dispatch(increment(product.id))}
                              className="inline-flex justify-center items-center w-4 h-4 md:w-7 md:h-7"
                            >
                              +
                            </button>
                            <span className="inline-flex justify-center items-center w-4 h-4 md:w-7 md:h-7">
                              {product.amount}
                            </span>
                            {product.amount > 1 && (
                              <button
                                type="button"
                                onClick={() => dispatch(decrement(product.id))}
                                className="inline-flex justify-center items-center w-4 h-4 md:w-7 md:h-7"
                              >
                                -
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col justify-center items-end absolute bottom-2 right-3">
                          <h1 className="md:text-2xl font-semibold text-sm ">
                            {count * product.amount}$
                          </h1>
                          <p className="text-gray-500 line-through text-sm md:text-md">
                            {product.price * product.amount} $
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" md:w-[30%]">
            <div className="md:p-6 flex flex-col md:gap-5 border-2 md:rounded-lg md:mt-10 md:sticky md:top-[10px] fixed bottom-0 left-0 w-full bg-white ">
              <h2 className="hidden md:block text-lg font-semibold">
                Your orders
              </h2>
              <div className="hidden md:flex flex-col gap-1">
                <h1 className="flex justify-between  items-center ">
                  <span>Orders ({arraylength})</span>
                  <span>{price} $</span>
                </h1>
                <div className="border border-violet-600 text-sm text-violet-600 w-full py-1 inline-flex justify-center items-center font-semibold rounded-sm">
                  Delivery on November 7th
                </div>
              </div>

              <div>
                <h1 className="flex justify-between items-center">
                  <span>Total: </span>
                  <span className="text-2xl text-black font-semibold">
                    {allDiscount} $
                  </span>
                </h1>
                <p className="hidden md:block text-end text-[14px] font-semibold text-green-600">
                  {" "}
                  You are saving {parseFloat(price - allDiscount).toFixed(2)} $
                </p>
              </div>
              <button className="btn-block btn-sm md:btn py-2 rounded-lg bg-[#7000FF] text-white md:text-lg">
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Savat;
