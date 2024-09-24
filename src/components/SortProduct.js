// import {BsFillGridFill,BsList}  from "react-icons/bs";
// import { useFilterContext } from "../ContextApi/FilterContext";

// const SortProduct = () => {
//     const {filter_products,sorting} = useFilterContext();
//     return <>
//                   <p>{`${filter_products.lenght} products avalibale`}</p>

//               <button className="sort-btn">
            
//               <BsFillGridFill className="icon"/>  
//               </button>
//               <button className="sort-btn">
                
//                 <BsList className="icon"/>
//               </button>
//               <form action="#">
//                 <label for="sort"></label>
//                 <select name="sort" id="sort" onClick={sorting}>
//                     <option value="lowest" >Price(lowest)</option>
//                     <option value="#" disabled></option>
//                     <option value="highest">Price(highest)</option>
//                     <option value="#" disabled></option>

//                     <option value="a-z">Price(a-z)</option>
//                     <option value="#" disabled ></option>

//                     <option value="z-a">Price(z-a)</option>
//                 </select>
//               </form>
//            </>
// }

// export default SortProduct;

//imp
// import { BsFillGridFill, BsList } from "react-icons/bs";
// import { useFilterContext } from "../ContextApi/FilterContext";

// const SortProduct = () => {
//     const { filter_products, all_products, sorting, grid_view ,setGridView,setListView} = useFilterContext();

//     return (
//         <>
            
//             {/* <p>{`${ all_products.length} products available`}</p> */}

//             <button className={ grid_view ? " active sort-btn" : "sort-btn" } onClick={setGridView}>
//                 <BsFillGridFill className="icon" />
//             </button>
//             <button className={ !grid_view ? " active sort-btn" : "sort-btn" } onClick={setListView}>
//                 <BsList className="icon" />
//             </button>
//             <p>{`${filter_products.length} products avalable`}</p>
//             <form action="#">
//                 <label htmlFor="sort"></label>
//                 <select name="sort" id="sort" onChange={sorting}>
//                     <option value="lowest">Price (Lowest)</option>
//                     <option value="highest">Price (Highest)</option>
//                     <option value="a-z">Name (A-Z)</option>
//                     <option value="z-a">Name (Z-A)</option>
//                 </select>
//             </form>
//         </>
//     );
// };

// export default SortProduct;



//imp

// import { BsFillGridFill, BsList } from "react-icons/bs";
// import { useFilterContext } from "../ContextApi/FilterContext";

// const SortProduct = () => {
//     const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

//     return (
//         <div className="sort-product">
//             <button className={grid_view ? "active sort-btn" : "sort-btn"} onClick={setGridView}>
//                 <BsFillGridFill className="icon" />
//             </button>
//             <button className={!grid_view ? "active sort-btn" : "sort-btn"} onClick={setListView}>
//                 <BsList className="icon" />
//             </button>
//             <p>{`${filter_products.length} products available`}</p>
//             <form>
//                 <label htmlFor="sort"></label>
//                 <select name="sort" id="sort" onChange={sorting}>
//                     <option value="lowest">Price (Lowest)</option>
//                     <option value="highest">Price (Highest)</option>
//                     <option value="a-z">Name (A-Z)</option>
//                     <option value="z-a">Name (Z-A)</option>
//                 </select>
//             </form>
//         </div>
//     );
// };

// export default SortProduct;



import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../ContextApi/FilterContext";

const SortProduct = () => {
    const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px 0',
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px',
            marginBottom: '15px',
        },
        button: {
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            padding: '10px 15px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, border-color 0.3s',
            display: 'flex',
            alignItems: 'center',
        },
        buttonActive: {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            color: '#fff',
        },
        icon: {
            fontSize: '24px',
        },
        text: {
            margin: '10px 0',
            fontSize: '16px',
        },
        select: {
            padding: '5px 10px',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
        },
    };

    return (
        <div style={styles.container}>
            {/* <div style={styles.buttonContainer}>
                <button
                    style={{ ...styles.button, ...(grid_view ? styles.buttonActive : {}) }}
                    onClick={setGridView}
                >
                    <BsFillGridFill style={styles.icon} />
                </button>
                <button
                    style={{ ...styles.button, ...(!grid_view ? styles.buttonActive : {}) }}
                    onClick={setListView}
                >
                    <BsList style={styles.icon} />
                </button>
            </div>
            <p style={styles.text}>{`${filter_products.length} products available`}</p>
            <form>
                <label htmlFor="sort" style={{ display: 'none' }}>Sort by</label>
                <select
                    name="sort"
                    id="sort"
                    onChange={sorting}
                    style={styles.select}
                >
                    <option value="lowest">Price (Lowest)</option>
                    <option value="highest">Price (Highest)</option>
                    <option value="a-z">Name (A-Z)</option>
                    <option value="z-a">Name (Z-A)</option>
                </select>
            </form> */}
        </div>
    );
};

export default SortProduct;















