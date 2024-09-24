import { useFilterContext } from "../ContextApi/FilterContext";
import FilterProduct from "./FilterProduct";
import ProductList from "./ProductList";
import SortProduct  from "./SortProduct";
 
const Product = () => {

const{  filter_products} = useFilterContext();
 
      return <> 
               <FilterProduct/>
               <SortProduct/>
               <ProductList/>
             </>
}
export default Product;



