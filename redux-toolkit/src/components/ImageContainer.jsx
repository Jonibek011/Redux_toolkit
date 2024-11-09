import { useSelector } from "react-redux";
import Image from "./Image";

function ImageContainer({ products }) {
  const { likedImages } = useSelector((state) => state.Liked);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-10 ">
      {products &&
        products.map((product) => {
          return (
            <Image
              key={product.id}
              product={product}
              added={likedImages.some((prod) => prod.id == product.id)}
            />
          );
        })}
    </div>
  );
}

export default ImageContainer;
