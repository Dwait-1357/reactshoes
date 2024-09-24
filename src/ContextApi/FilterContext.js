// import { createContext, useContext, useEffect, useReducer } from "react";
//  import reducer from '../reducer/Filter_reducer'; // Ensure this is the correct path

//  import {  useBio  } from "./Index";
//  import { type } from "@testing-library/user-event/dist/type";

// const FilterContext = createContext();

// const initialstate = {
//     filter_products:[],
//     all_products:[],
//     grid_view:true,
//     sorting_value:"a-z"
// }

// export const FilterContextProvider = ({children}) => {

//     const { products} = useBio();
//     const[state,dispatch] = useReducer(reducer,initialstate);

//     //grid view
//     const setGridView = () => {
//         return dispatch({TYPE:"SET_GRIDVIEW"});
//     }

//     //sorting function
//     const sorting = () => {
             
//         dispatch({type:"GET_SORT_VALUE"})
//     }

//     useEffect(()=>{

//         dispatch({type:"SORTING_PRODUCTS", payload:products});
//     },[state.sorting_value]);

//     useEffect(() => {
//            dispatch({TYPE:"LOADING_FILTER_PRODUCTS",payload:products})
//     },[ products]);


//     return <FilterContext.Provider value={{...state,setGridView,sorting}}>
//         {children}
//     </FilterContext.Provider>
// }

// export const useFilterContext = () => {
//     return useContext(FilterContext);
// }


import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/filterReducer';
import { useBio } from "./productcontext";

export const FilterContext = createContext();

const initialstate = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "a-z",
    filters:{
        text:"",
        category:"all",
        brand:"all",
        star:"all"
    }
};

export const FilterContextProvider = ({ children }) => {
    const { category } = useBio();
   //console.log(category);

    const [state, dispatch] = useReducer(reducer, initialstate);


    //to clear filter
    const clearFilters = () => {
        dispatch({type:"CLEAR_FILTERS"});
    }
    

    // Sorting function
    const sorting = (event) => {
        const sortValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
    };

    //updatefilterproduct
      
      const updateFilterValue = (event) => {

           const name = event.target.name;
           const value = event.target.value;
          // console.log(`Updating filter: ${name} = ${value}`); 

           return dispatch({type:"UPDATE_FILTER_VALUES",payload:{name,value}});
      }
    



    //to set gridview
    const setGridView = () => {
        return dispatch({type:"SET_GRIDVIEW"})
    }

    const setListView = () => {
        return dispatch({type:"SET_LiSTVIEW"})
    }

    useEffect(() => {

       // dispatch({type:"FILTER_PRODUCTS"});
        dispatch({ type: "SORTING_PRODUCTS", payload: state.filter_products });
      //  dispatch({ type: "SORTING_PRODUCTS"});
    }, [state.filters,state.sorting_value]);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
      }, [state.filters]);

    useEffect(() => {
        dispatch({ type: "LOADING_FILTER_PRODUCTS", payload:category });
    }, [category]);

    return (
        <FilterContext.Provider value={{ ...state, sorting,setGridView ,setListView,updateFilterValue,clearFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

// Correct export for useFilterContext
export const useFilterContext = () => {
    return useContext(FilterContext);
};
