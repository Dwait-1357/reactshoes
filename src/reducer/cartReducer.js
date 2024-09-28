// const cartReducer = (state, action) => {
//     if (action.type === "ADD_TO_CART") {
//         let { id, amount, product,total_item } = action.payload;         
//         //tackle existing product

//     let existingProduct = state.cart.find(
//         (curItem) => curItem.id === id
//     );


//     if(existingProduct)
//     {
//        let upadateProduct = state.cart.map((curElem) => {

//            if(curElem.id === id){
//               let newAmount = curElem.amount + amount;
//               if(newAmount >= curElem.max){
//                 newAmount = curElem.max;
//               }
//               return{
//                 ...curElem,
//                 amount:newAmount,
//                };
//            }else{
//                   return curElem;              

//            }
          
//        });
//        return {

//            ...state,
//             cart: upadateProduct,// Add cartProduct to the cart array
//         };

       
//     }
//     else
//     {
//         let cartProduct;
//         cartProduct = {
//             id: id,
//             name:product.name,
//             amount,
//             image:product.image,
//             price:product.price,
//             max:product.stock,
            
//         };

//         // Example update to cart
//         return {
//             ...state,
//             cart: [...state.cart, cartProduct] // Add cartProduct to the cart array
//         };
//     }


//         // Create a cartProduct object if needed
      
//     }


//    if(action.type === "SET_DECREMENT")
//    {
//      let upadateProduct = state.cart.map((curElem) => {
//             if(curElem.id === action.payload)
//             {
//                 let decAmount = curElem.amount - 1;
//                 if(decAmount <= 1)
//                 {
//                     decAmount = 1;
//                 }

//                 return {
//                     ...curElem,
//                     amount:decAmount,
//                 }
//             }else{
//                 return curElem;
//             }
//      });
     
//      return {...state,cart:upadateProduct }
//    }

//    if(action.type === "SET_INCREMENT")
//     {
//       let upadateProduct = state.cart.map((curElem) => {
//              if(curElem.id === action.payload)
//              {
//                  let incAmount = curElem.amount + 1;
//                  if(incAmount >= curElem.max)
//                  {
//                      incAmount = curElem.max;
//                  }
 
//                  return {
//                      ...curElem,
//                      amount:incAmount,
//                  }
//              }else{
//                  return curElem;
//              }
//       });
      
//       return {...state,cart:upadateProduct }
//     }
 

//    if(action.type === "REMOVE_ITEM")   {
//         let updatedCart = state.cart.filter(
//             (curElem) => curElem.id !== action.payload
               
    
//         )

//         return {
//             ...state,
//             cart:updatedCart,
//         };
 

//     }

//     if(action.type === "CLEAR_CART")
//     {
//         return{
//             ...state,
//             cart:[]
//         }
//     }

//     if(action.type === "CART_TOTAL_ITEM")
//     {
//         let updatedItemVal = state.cart.reduce((intialVal,curElem) => {
              
//             let {amount} = curElem;

//             intialVal = intialVal + amount;
//             return intialVal;
//         },0)

//         return {
//             ...state,
//             total_item:updatedItemVal
//         }
//     }
//     if(action.type === "CART_TOTAL_PRICE" )
//     {
//         let total_price = state.cart.reduce((intialVal,curElem) => {
               
//              let {price,amount} = curElem;
//              intialVal = intialVal + price * amount;
//              return intialVal;
//         },0);

//         return {
//             ...state,
//             total_price,
//         }
//     }
//     return state;
// };

// export default cartReducer;


//imp21 const cartReducer = (state, action) => {
//     // Initialize cart as an empty array if it is undefined
//     const cart = state.cart || [];

//     if (action.type === "ADD_TO_CART") {
//         let { id, amount, product } = action.payload;

//         let existingProduct = cart.find((curItem) => curItem.id === id);

//         if (existingProduct) {
//             let updatedProduct = cart.map((curElem) => {
//                 if (curElem.id === id) {
//                     let newAmount = curElem.amount + amount;
//                     if (newAmount >= curElem.max) {
//                         newAmount = curElem.max;
//                     }
//                     return { ...curElem, amount: newAmount };
//                 } else {
//                     return curElem;
//                 }
//             });
//             return { ...state, cart: updatedProduct };
//         } else {
//             let cartProduct = {
//                 id: id,
//                 name: product.name,
//                 amount,
//                 image: product.image,
//                 price: product.price,
//                 max: product.stock,
//             };
//             return { ...state, cart: [...cart, cartProduct] };
//         }
//     }

//     if (action.type === "SET_DECREMENT") {
//         let updatedProduct = cart.map((curElem) => {
//             if (curElem.id === action.payload) {
//                 let decAmount = curElem.amount - 1;
//                 if (decAmount <= 1) {
//                     decAmount = 1;
//                 }
//                 return { ...curElem, amount: decAmount };
//             } else {
//                 return curElem;
//             }
//         });
//         return { ...state, cart: updatedProduct };
//     }

//     if (action.type === "SET_INCREMENT") {
//         let updatedProduct = cart.map((curElem) => {
//             if (curElem.id === action.payload) {
//                 let incAmount = curElem.amount + 1;
//                 if (incAmount >= curElem.max) {
//                     incAmount = curElem.max;
//                 }
//                 return { ...curElem, amount: incAmount };
//             } else {
//                 return curElem;
//             }
//         });
//         return { ...state, cart: updatedProduct };
//     }

//     if (action.type === "REMOVE_ITEM") {
//         let updatedCart = cart.filter((curElem) => curElem.id !== action.payload);
//         return { ...state, cart: updatedCart };
//     }

//     if (action.type === "CLEAR_CART") {
//         return { ...state, cart: [] };
//     }

//     if (action.type === "CART_TOTAL_ITEM") {
//         // Ensure that state.cart is an array
//         let updatedItemVal = cart.reduce((initialVal, curElem) => {
//             let { amount } = curElem;
//             return initialVal + amount;
//         }, 0);
//         return { ...state, total_item: updatedItemVal };
//     }

//     if (action.type === "CART_TOTAL_PRICE") {
//         let totalPrice = cart.reduce((initialVal, curElem) => {
//             let { price, amount } = curElem;
//             return initialVal + price * amount;
//         }, 0);
//         return { ...state, total_price: totalPrice };
//     }

//     return state;
// };

// export default cartReducer;


const cartReducer = (state, action) => {
    const cart = state.cart || [];

    switch (action.type) {
        case "ADD_TO_CART":
            const { id, amount, product } = action.payload;
            const existingProduct = cart.find((curItem) => curItem.id === id);

            if (existingProduct) {
                const updatedCart = cart.map((curElem) => {
                    if (curElem.id === id) {
                        let newAmount = curElem.amount + amount;
                        if (newAmount >= curElem.max) {
                            newAmount = curElem.max;
                        }
                        return { ...curElem, amount: newAmount };
                    }
                    return curElem;
                });
                return { ...state, cart: updatedCart };
            } else {
                const cartProduct = {
                    id: id,
                    name: product.name,
                    amount,
                    image: product.image,
                    price: product.price,
                    max: product.stock,
                };
                return { ...state, cart: [...cart, cartProduct] };
            }

        case "REMOVE_ITEM":
            const updatedCart = cart.filter((curElem) => curElem.id !== action.payload);
            return { ...state, cart: updatedCart };

        case "SET_DECREMENT":
            const decrementedCart = cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decAmount = curElem.amount - 1;
                    if (decAmount < 1) {
                        decAmount = 1;
                    }
                    return { ...curElem, amount: decAmount };
                }
                return curElem;
            });
            return { ...state, cart: decrementedCart };

        case "SET_INCREMENT":
            const incrementedCart = cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let incAmount = curElem.amount + 1;
                    if (incAmount >= curElem.max) {
                        incAmount = curElem.max;
                    }
                    return { ...curElem, amount: incAmount };
                }
                return curElem;
            });
            return { ...state, cart: incrementedCart };

        case "CLEAR_CART":
            return { ...state, cart: [] };

        case "CART_TOTAL_ITEM":
            const totalItems = cart.reduce((total, curElem) => total + curElem.amount, 0);
            return { ...state, total_item: totalItems };

        case "CART_TOTAL_PRICE":
            const totalPrice = cart.reduce((total, curElem) => total + curElem.price * curElem.amount, 0);
            return { ...state, total_price: totalPrice };

        case "SET_CART":
                return { ...state, cart: action.payload };    
            

        default:
            return state;
    }
};

export default cartReducer;
