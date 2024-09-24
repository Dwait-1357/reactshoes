import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/Productreducer'; // Ensure this is the correct path
import { type } from "@testing-library/user-event/dist/type";

export const BioContext = createContext();

const API = "http://127.0.0.1:8000/api/services";

export const BioProvider = ({children}) => {
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        category: [],
        isSingleLoading: false,
       singleProduct: {},
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (API) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.post(API);
            const products = await res.data;
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "MY_ERROR" });
        }
    };

    const getSingleProduct = async (API) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(API);
            const singleProduct = await res.data;  // Assuming the API returns the product data
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }

    };

    useEffect(() => {
        getProduct(API);
    }, []);

    return (
        <BioContext.Provider value={{ ...state,getSingleProduct  }}>
            {children}
        </BioContext.Provider>
    );
};

export const useBio = () => {
    return useContext(BioContext);
};
