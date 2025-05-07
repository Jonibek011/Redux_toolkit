import { BsBagPlus } from "react-icons/bs";

import { MdStar } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { useFetch } from "../hooks/useFetch";

function Foods() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products?limit=190"
  );

  //   if (data) {
  //     const data1 = data.products.filter((prod) => {
  //       return prod.category == "groceries";
  //     });
  //     console.log(data1);
  //     return data1
  //   }
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl lg:tex-7xl font-bold text-violet-950 text-center mt-10">
        Foods
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-10 px-[3%]">
        {data &&
          data.products
            .filter((prod) => prod.category == "groceries")
            .map((product) => {
              return (
                <div
                  className=" card rounded-xl overflow-hidden bg-white group relative shadow-md hover:shadow-lg transition-shadow duration-200 "
                  key={product.id}
                >
                  <span className="inline-flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:bg-slate-100 absolute bottom-2 right-2 z-10">
                    <BsBagPlus className="w-5 h-5" />
                  </span>
                  <div className="card  box-border">
                    <div className="inline-flex  justify-center items-center relative  bg-gray-200 rounded-xl">
                      <img
                        src={product.images[0]}
                        alt=""
                        className="w-[200px] h-[250px] group-hover:scale-105 transition-all duration-300"
                      />
                      {false && (
                        <span className="hidden  group-hover:inline-flex transition-all duration-300 cursor-pointer justify-center items-center absolute top-3  right-3 text-xl w-8 h-8 border border-white rounded-full bg-gray-200 text-white">
                          <IoIosHeart />
                        </span>
                      )}

                      {true && (
                        <span className="hidden  group-hover:inline-flex transition-all duration-300 cursor-pointer justify-center items-center absolute top-3  right-3 text-xl w-8 h-8 border border-red-500 rounded-full bg-gray-200 text-red-500">
                          <IoIosHeart />
                        </span>
                      )}
                      <span className="px-2 text-white bg-orange-600 rounded-md absolute inline-block bottom-1 left-1 text-[12px] ">
                        On Sale!
                      </span>
                    </div>
                    <div className="card-info bg-white px-4 py-2 flex flex-col justify-between gap-10 h-full">
                      <div>
                        <h1 className="text-[18px] font-semibold text-black">
                          {product.title}
                        </h1>
                        <p className="flex items-center gap-2">
                          <MdStar className="text-orange-300" />{" "}
                          {product.rating} (in stock {product.stock})
                        </p>
                      </div>

                      <div>
                        <h1 className="text-gray-400 line-through">
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
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Foods;
