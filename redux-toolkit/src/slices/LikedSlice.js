import { createSlice } from "@reduxjs/toolkit";
//toast
import { toast } from "react-toastify";

const initialState = {
  likedImages: [],
  toggleButton: false,
  toBasket: [],
  allProducts: 0,
  price: 0,
  allDiscount: 0,
};

const LikedSlice = createSlice({
  name: "Liked",
  initialState,
  reducers: {
    addLike: (state, { payload }) => {
      const alreadyAdded = state.likedImages.some(
        (prod) => prod.id == payload.id
      );

      if (!alreadyAdded) {
        state.likedImages = [...state.likedImages, payload];
        state.toggleButton = true;
      } else {
        state.likedImages = state.likedImages.filter(
          (prod) => prod.id !== payload.id
        );
        state.toggleButton = false;
      }
    },
    addToBasket: (state, { payload }) => {
      const product = state.toBasket.find((prod) => prod.id == payload.id);
      if (product) {
        toast.warn("Product already added!");
      } else {
        state.toBasket = [...state.toBasket, payload];
        let allProductCounter = 0;
        let allProductPrice = 0;
        let allDiscountPrice = 0;
        state.toBasket.forEach((product) => {
          allProductCounter += product.amount;
          allProductPrice += product.price * product.amount;
          allDiscountPrice +=
            (product.price -
              (product.discountPercentage / 100) * product.price) *
            product.amount;
        });
        state.allProducts = allProductCounter;
        state.price = allProductPrice;
        state.allDiscount = parseFloat(allDiscountPrice).toFixed(2);
      }
    },
    removeItem: (state, { payload }) => {
      state.toBasket = state.toBasket.filter((prod) => prod.id != payload);
      let allProductCounter = 0;
      let allProductPrice = 0;
      let allDiscountPrice = 0;
      state.toBasket.forEach((product) => {
        allProductCounter += product.amount;
        allProductPrice += product.price * product.amount;
        allDiscountPrice +=
          (product.price - (product.discountPercentage / 100) * product.price) *
          product.amount;
      });
      state.allProducts = allProductCounter;
      state.price = allProductPrice;
      state.allDiscount = parseFloat(allDiscountPrice).toFixed(2);
    },
    increment: (state, { payload }) => {
      const item = state.toBasket.find((prod) => prod.id == payload);
      item.amount += 1;

      let allProductCounter = 0;
      let allProductPrice = 0;
      let allDiscountPrice = 0;
      state.toBasket.forEach((product) => {
        allProductCounter += product.amount;
        allProductPrice += product.price * product.amount;
        allDiscountPrice +=
          (product.price - (product.discountPercentage / 100) * product.price) *
          product.amount;
      });
      state.allProducts = allProductCounter;
      state.price = allProductPrice;
      state.allDiscount = parseFloat(allDiscountPrice).toFixed(2);
    },
    decrement: (state, { payload }) => {
      console.log(payload);
      const item = state.toBasket.find((prod) => prod.id == payload);
      item.amount -= 1;
      let allProductCounter = 0;
      let allProductPrice = 0;
      let allDiscountPrice = 0;
      state.toBasket.forEach((product) => {
        allProductCounter += product.amount;
        allProductPrice += product.price * product.amount;
        allDiscountPrice +=
          (product.price - (product.discountPercentage / 100) * product.price) *
          product.amount;
      });
      state.allProducts = allProductCounter;
      state.price = allProductPrice;
      state.allDiscount = parseFloat(allDiscountPrice).toFixed(2);
    },
  },
});

export const { addLike, addToBasket, increment, decrement, removeItem } =
  LikedSlice.actions;
export default LikedSlice.reducer;
