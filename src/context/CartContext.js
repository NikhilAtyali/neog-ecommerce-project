// import axios from "axios";
// import { useEffect, useState } from "react";
// import { createContext } from "react";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const encodedToken = localStorage.getItem("encodedToken");
//   useEffect(() => {
//     if (encodedToken) {
//       (async () => {
//         try {
//           const response = await axios.get("/api/user/cart", {
//             headers: {
//               authorization: encodedToken,
//             },
//           });

//           setCartItems(response.data.cart);
//         } catch (e) {
//           console.log(e);
//         }
//       })();
//     }
//   }, [encodedToken]);

//   const addItemToCart = async (product) => {
//     const response = await axios.post(
//       "/api/user/cart",
//       {
//         product,
//       },
//       {
//         headers: {
//           authorization: encodedToken,
//         },
//       }
//     );
//     setCartItems(() => response.data.cart);
//   };
//   const removeItemFromCart = async (id) => {
//     const response = await axios.delete(`/api/user/cart/${id}`, {
//       headers: {
//         authorization: encodedToken,
//       },
//     });
//     setCartItems(() => response.data.cart);
//   };
//   const increaseQuantity = async (id) => {
//     const response = await axios.post(
//       `/api/user/cart/${id}`,
//       {
//         action: {
//           type: "increment",
//         },
//       },
//       {
//         headers: {
//           authorization: encodedToken,
//         },
//       }
//     );
//     setCartItems(response.data.cart);
//   };
//   const decreaseQuantity = async (id) => {
//     const response = await axios.post(
//       `/api/user/cart/${id}`,
//       {
//         action: {
//           type: "decrement",
//         },
//       },
//       {
//         headers: {
//           authorization: encodedToken,
//         },
//       }
//     );
//     setCartItems(response.data.cart);
//   };
//   const value = {
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState, createContext } from "react";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const encodedToken = localStorage.getItem("encodedToken");

//   useEffect(() => {
//     if (encodedToken) {
//       (async () => {
//         try {
//           const response = await fetch("/api/user/cart", {
//             headers: {
//               authorization: encodedToken,
//             },
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setCartItems(data.cart);
//           } else {
//             console.log("Error:", response.status);
//           }
//         } catch (e) {
//           console.log(e);
//         }
//       })();
//     }
//   }, [encodedToken]);

//   const addItemToCart = async (product) => {
//     try {
//       const response = await fetch("/api/user/cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: encodedToken,
//         },
//         body: JSON.stringify({ product }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("......................")
//         setCartItems(data.cart);
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const removeItemFromCart = async (id) => {
//     try {
//       const response = await fetch(`/api/user/cart/${id}`, {
//         method: "DELETE",
//         headers: {
//           authorization: encodedToken,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setCartItems(data.cart);
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const increaseQuantity = async (id) => {
//     try {
//       const response = await fetch(`/api/user/cart/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: encodedToken,
//         },
//         body: JSON.stringify({
//           action: {
//             type: "increment",
//           },
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setCartItems(data.cart);
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const decreaseQuantity = async (id) => {
//     try {
//       const response = await fetch(`/api/user/cart/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: encodedToken,
//         },
//         body: JSON.stringify({
//           action: {
//             type: "decrement",
//           },
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setCartItems(data.cart);
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const value = {
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from "axios";
import {  useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const encodedToken = localStorage.getItem("token");
  const updateTotalPrice = (cart) => {
    setTotalPrice(() =>
      cart.reduce((acc, curr) => {
        return +(curr.price * curr.qty) + acc;
      }, 0)
    );
  };
  const updateTotalDiscount = (cart) => {
    setTotalDiscount(() =>
      cart.reduce(
        (acc, cur) =>
          (Number(cur.price) - Number(cur.oldPrice)) * Number(cur.qty) + acc,
        0
      )
    );
  };
  
  const addItemToCart = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await axios.post(
          "/api/user/cart",
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setCartItems(() => response.data.cart);
        updateTotalPrice(response.data.cart);
        updateTotalDiscount(response.data.cart);
        toast.success("Added To The Cart", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeItemFromCart = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setCartItems(() => response.data.cart);

      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.log(e);
    }
  };
  const increaseQuantity = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartItems(response.data.cart);
      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.log(e);
    }
  };
  const decreaseQuantity = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartItems(response.data.cart);
      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.log(e);
    }
  };
  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    totalPrice,
    totalDiscount,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};