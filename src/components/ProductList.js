import { useFilterContext } from "../ContextApi/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {

    const {filter_products,grid_view} = useFilterContext();

    if(grid_view)
    {
        return <GridView category={filter_products}/>
    }

    if(grid_view === false)
        {
            return <ListView category={filter_products}/>
        }
    return <>
    
           </>
}

export default ProductList;