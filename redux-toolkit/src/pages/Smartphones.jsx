import { useFetch } from "../hooks/useFetch";
import Image from "../components/Image";

function Smartphones() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products?limit=190"
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl lg:tex-7xl font-bold text-violet-950 text-center mt-10">
        Smartphones
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5 my-10 px-[3%]">
        {data &&
          data.products
            .filter(
              (prod) =>
                prod.category == "smartphones" || prod.category == "tablets"
            )
            .map((product) => {
              return (
                <div>
                  <Image product={product} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Smartphones;
