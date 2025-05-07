import { useSelector } from "react-redux";
import Image from "../components/Image";

function LikedImages() {
  const { likedImages } = useSelector((state) => state.Liked);

  return (
    <div className="custom-container min-h-[68vh] max-w-6xl mx-auto">
      {likedImages.length == 0 && (
        <h1 className="text-xl md:text-3xl text-violet-800 text-center font-semibold mt-10">
          You have not liked products yet :(
        </h1>
      )}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-10 ">
        {likedImages &&
          likedImages.map((product) => {
            return (
              <Image
                key={product.id}
                product={product}
                added={likedImages.some((prod) => prod.id == product.id)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default LikedImages;
