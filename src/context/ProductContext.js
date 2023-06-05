import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_STATE": {
      return { ...state, products: action.payload };
    }
    case "SEARCH": {	
      return {	
        ...state,	
        condition: { ...state.condition, search: action.payload },	
      };	
    }	
    case "RESET_SEARCH": {	
      return { ...state, condition: { ...state.condition, search: "" } };	
    }
    case "PRICE": {
      return {
        ...state,
        condition: { ...state.condition, price: action.payload },
      };
    }
    case "CATEGORIES": {
      if (action.payload.isChecked) {
        return {
          ...state,
          condition: {
            ...state.condition,
            categories: [...state.condition.categories, action.payload.value],
          },
        };
      } else {
        return {
          ...state,
          condition: {
            ...state.condition,
            categories: state.condition.categories.filter(
              (category) => category !== action.payload.value
            ),
          },
        };
      }
    }
    case "RATING": {
      return {
        ...state,
        condition: {
          ...state.condition,
          rating: Math.abs(action.payload),
        },
      };
    }
    case "CLEAR": {
      return {
        ...state,
        condition: {
          price: null,
          categories: [],
          rating: null,
        },
      };
    }
    default:
  }
};
export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    condition: {
      price: null,
      categories: [],
      rating: null,
    },
  });

  const initialProducts = async () => {
    const response = await axios.get("/api/products");
    dispatch({ type: "INITIAL_STATE", payload: response.data.products });
  };
  useEffect(() => {
    initialProducts();
  }, []);
  const searchHandler = (arr, condition) => {	
    if (condition.search === "") return arr;	
    return arr.filter((item) =>	
      item.productName	
        .toLowerCase()	
        .includes(state.condition.search.toLowerCase())	
    );	
  };
  const priceFilterHandler = (arr, conditions) => {
    if (conditions.price === null) return arr;

    return [...arr].sort((a, b) =>
      conditions.price === "LTH" ? a.price - b.price : b.price - a.price
    );
  };
  const categoriesFilterHandler = (arr, condition) => {
    if (condition.categories.length === 0) return arr;
    return arr.filter((item) =>
      condition.categories.some((category) => category === item.type)
    );
  };
  const ratingFilterHandler = (arr, condition) => {
    if (condition.rating === null) return arr;
    console.log(condition.rating);
    return arr.filter((item) => item.rating >= condition.rating);
  };
  const filtersArray = [
    categoriesFilterHandler,
    ratingFilterHandler,
    priceFilterHandler,
  ];

  const filteredArray = filtersArray.reduce(
    (acc, cur) => cur(acc, state.condition),
    state.products
  );
  const value = {
    filteredArray,
    state,
    dispatch,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};