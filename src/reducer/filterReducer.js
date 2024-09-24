const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOADING_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };        
        case "SET_GRIDVIEW":
            return {...state,grid_view:true}             
        case "SET_LiSTVIEW":
            return {...state,grid_view:false} 

        case "GET_SORT_VALUE":
            return { ...state, sorting_value: action.payload };

        case "SORTING_PRODUCTS":
            let sortedProducts = [...state.all_products];

            if (state.sorting_value === "lowest") {
                sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            }

            if (state.sorting_value === "highest") {
                sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
            }

            if (state.sorting_value === "a-z") {
                sortedProducts = sortedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }

            if (state.sorting_value === "z-a") {
                sortedProducts = sortedProducts.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            return {
                ...state,
                filter_products: sortedProducts,
            };

            case "UPDATE_FILTER_VALUES":
            const{name,value} = action.payload;
            return {...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                }
            }    

          

            case "FILTER_PRODUCTS":
                  let { all_products } = state;
                  let tempFilterProduct = [...all_products];
                  const { text,category,brand,star } = state.filters;
                  if (text){
                             tempFilterProduct = tempFilterProduct.filter((curElem) => {
                            return curElem.name.toLowerCase().includes(text.toLowerCase());
                          });
            }

            if(category !== "all"){
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) =>  curElem.category === category
                    
                );
            }


            if(brand !== "all"){
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.brand.toLowerCase() === brand.toLowerCase()
                   
                );
            }         
                   return { ...state, filter_products: tempFilterProduct };


           case "CLEAR_FILTERS":
            return {
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    category:"all",
                    brand:"all"

                }
            }    

        default:
            return state;
    }
};

export default filterReducer;
































































































































//import FilterProduct from "../components/FilterProduct";

// const Filter_reducer = (state,action) => {
   
//      switch(action.type)
//      {
//          case "LOADING_FILTER_PRODUCTS" :
//             return {...state,filter_products:[...action.payload],all_products:[...action.payload]} 

//          case "SET_GRIDVIEW":
//             return{...state,grid_view:true} 
         
//          case "GET_SORT_VALUE":
//             let userSortValue = document.getElementById("sort");
//             let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
//             return {...state,sorting_value:sort_value}  
            
//          case "SORTING_PRODUCTS": 
//              let newSortData;
//              let tempSortProduct = [...action.payload];


//              if(state.sorting_value === "lowest") 
//                 {
//                     const sortingProducts = (a,b) => {
                          
//                         return a.price - b.price;
//                     }
//                     newSortData = tempSortProduct.sort(sortingProducts)
//                 }










//              if(state.sorting_value === "a-z") 
//                 {
//                     newSortData = tempSortProduct.sort((a,b) => 
//                           a.name.localeCompare(b.name)
//                     );
//                 }
//                 if(state.sorting_value === "z-a") 
//                     {
//                         newSortData = tempSortProduct.sort((a,b) => 
//                               b.name.localeCompare(a.name)
//                         );
//                     } 
//              return {...state,filter_products:newSortData}
//         default:
//             return state;
//      }

// }

// export default Filter_reducer;

  // case "FILTER_PRODUCTS":
            //     let { all_products} = state;
            //     let tempFilterProduct = [...all_products];

            //     const{text} = state.filters;

            //     if(text) {
            //         tempFilterProduct = tempFilterProduct.filter((curElem) => {
            //             return curElem.name.toLowerCase().includes(text.toLowerCase());
            //         });
            //     }
            //     console.log("Filtered products:", tempFilterProduct); 
            //     return {...state,filter_products:tempFilterProduct}
