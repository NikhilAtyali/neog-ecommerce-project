// // import axios from "axios";
// // import { createContext, useState, useEffect } from "react";

// // export const WishlistContext = createContext();

// // export const WishlistContextProvider = ({ children }) => {
// //   const [wishlistItems, setWishlistItems] = useState([]);
// //   const encodedToken = localStorage.getItem("encodedToken");
// //   useEffect(() => {
// //     (async () => {
// //       const response = await axios.get("/api/user/wishlist", {
// //         headers: {
// //           authorization: encodedToken,
// //         },
// //       });
// //       setWishlistItems(() => response.data.wishlist);
// //     })();
// //   }, [encodedToken]);
// //   const addItemToWishlist = async (product) => {
// //     const response = await axios.post(
// //       "/api/user/wishlist",
// //       {
// //         product,
// //       },
// //       {
// //         headers: {
// //           authorization: encodedToken,
// //         },
// //       }
// //     );
// //     console.log("wishlost", response.data.wishlist);
// //     setWishlistItems(() => response.data.wishlist);
// //   };
// //   const removeFromWishlist = async (id) => {
// //     const response = await axios.delete(`/api/user/wishlist/${id}`, {
// //       headers: {
// //         authorization: encodedToken,
// //       },
// //     });
// //     setWishlistItems(() => response.data.wishlist);
// //   };
// //   const value = {
// //     wishlistItems,
// //     addItemToWishlist,
// //     removeFromWishlist,
// //   };
// //   return (
// //     <WishlistContext.Provider value={value}>
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // };

// import { createContext, useState, useEffect } from "react";

// export const WishlistContext = createContext();

// export const WishlistContextProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const encodedToken = localStorage.getItem("encodedToken");

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch("/api/user/wishlist", {
//           headers: {
//             authorization: encodedToken,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setWishlistItems(data.wishlist);
//         } else {
//           console.log("Error:", response.status);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     })();
//   }, [encodedToken]);

//   const addItemToWishlist = async (product) => {
//     try {
//       const response = await fetch("/api/user/wishlist", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: encodedToken,
//         },
//         body: JSON.stringify({ product }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setWishlistItems(data.wishlist);
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const removeFromWishlist = async (id) => {
//     try {
//       const response = await fetch(`/api/user/wishlist/${id}`, {
//         method: "DELETE",
//         headers: {
//           authorization: encodedToken,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setWishlistItems(data.wishlist);
//       } else {
//         console.log("Error..........:", response.status);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const value = {
//     wishlistItems,
//     addItemToWishlist,
//     removeFromWishlist,
//   };

//   return (
//     <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
//   );
// };



import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/user/wishlist", {
  //         headers: {
  //           authorization: encodedToken,
  //         },
  //       });
  //       setWishlistItems(() => response.data.wishlist);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, [encodedToken]);

  const addItemToWishlist = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        setWishlistItems(() => response.data.wishlist);
        toast.success("Added To The Wishlist", {
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
  const removeFromWishlist = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        setWishlistItems(() => response.data.wishlist);
        toast.info("Removed From Wishlist", {
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
  const value = {
    wishlistItems,
    setWishlistItems,
    addItemToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};