

import React from 'react';
import { useFilterContext } from "../ContextApi/FilterContext";
import { BsFillGridFill, BsList } from 'react-icons/bs';

const FilterProduct = () => {
    const { filters: { text }, all_products, updateFilterValue, clearFilters, grid_view, setGridView, setListView, sorting } = useFilterContext();

    // Get unique data fields
    const getUniqueData = (data, property) => {
        let values = data.map(curElem => curElem[property]);
        return ["all", ...new Set(values)];
    };

    // We need unique data
    const categoryOnlyData = getUniqueData(all_products, "category");
    const companyOnlyData = getUniqueData(all_products, "brand");

    // Inline styles
    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        item: {
            flex: '1 1 150px',
            minWidth: '150px',
        },
        searchForm: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchInput: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            fontSize: '16px',
        },
        filterDropdown: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            fontSize: '16px',
        },
        filterTitle: {
            fontSize: '16px',
            marginBottom: '10px',
        },
        viewButtons: {
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
        },
        viewButton: {
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            padding: '10px 15px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        viewButtonActive: {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            color: 'white',
        },
        clearFiltersButton: {
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        clearFiltersButtonHover: {
            backgroundColor: '#c82333',
        },
    };

    return (
        <div style={styles.container}>
            {/* Category Dropdown */}
            <div style={styles.item}>
  <select
    name="category"
    style={styles.filterDropdown}
    onChange={updateFilterValue}
  >
    {/* Placeholder option */}
    <option value="" disabled selected>
      Category
    </option>

    {categoryOnlyData.map((curElem, index) => (
      <option key={index} value={curElem}>
        {curElem}
      </option>
    ))}
  </select>
</div>


            {/* Brand Dropdown */}
            <div style={styles.item}>
  <select
    name="brand"
    style={styles.filterDropdown}
    onChange={updateFilterValue}
  >
    {/* Placeholder option */}
    <option value="" disabled selected>
      company
    </option>

    {companyOnlyData.map((curElem, index) => (
      <option key={index} value={curElem}>
        {curElem}
      </option>
    ))}
  </select>
</div>


            {/* Sort Product */}
            <div style={styles.item}>
                {/* <h5 style={styles.filterTitle}>Sort By</h5> */}
                <select
                    name="sort"
                    style={styles.filterDropdown}
                    onChange={sorting}
                >
                    <option value="Sort By">Sort By</option>
                    <option value="lowest">Price (Lowest)</option>
                    <option value="highest">Price (Highest)</option>
                    <option value="a-z">Name (A-Z)</option>
                    <option value="z-a">Name (Z-A)</option>
                </select>
            </div>

           
            

            {/* Search Product Field */}
            <div style={styles.item}>
                <form onSubmit={(e) => e.preventDefault()} style={styles.searchForm}>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={(e) => updateFilterValue(e)}
                        placeholder="Search products"
                        style={styles.searchInput}
                    />
                </form>
            </div>


            {/* Clear Filter Button */}
            <div style={styles.item}>
                <button
                    onClick={clearFilters}
                    style={styles.clearFiltersButton}
                    onMouseEnter={(e) => e.target.style.backgroundColor = styles.clearFiltersButtonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = styles.clearFiltersButton.backgroundColor}
                >
                    Clear Filters
                </button>
            </div>

             {/* View Options (List/Grid View) */}
             <div style={styles.item}>
                <h5 style={styles.filterTitle}></h5>
                <div style={styles.viewButtons}>
                    <button
                        style={{ ...styles.viewButton, ...(grid_view ? styles.viewButtonActive : {}) }}
                        onClick={setGridView}
                    >
                        <BsFillGridFill />
                    </button>
                    <button
                        style={{ ...styles.viewButton, ...(!grid_view ? styles.viewButtonActive : {}) }}
                        onClick={setListView}
                    >
                        <BsList />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FilterProduct;













































// import { useFilterContext } from "../ContextApi/FilterContext";
// const FilterProduct = () => {
//     const {filters:{text}
//     , all_products, updateFilterValue,clearFilters } = useFilterContext();

//    //get data unique feilds
//    const getUniqueData = (data,property) => {           
//      let newVal = data.map((curElem,index) => {         
//          return curElem[property];
//      });    

//        return (newVal = ["all", ...new Set(newVal)]);     
//    }   
//     //we need unique data
//     const categoryOnlyData = getUniqueData(all_products,"category");
//     const companyOnlyData = getUniqueData(all_products,"brand");  
    
//     return (
//       <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input 
//           type="text" 
//           name="text" 
//           value={text} 
//           onChange={(e) => updateFilterValue(e)} 
//           placeholder="Search products"
//         />
//       </form>
//       <h3>form category</h3>
//       {
//         categoryOnlyData.map((curElem,index) => {                
//            return <button key={index} value={curElem}
//                          type="button" name="category" onClick={updateFilterValue}>
//                          {curElem}
//                    </button>                
//         })
//       }
//       <h5>company category</h5>
//       <form action="">
//         <select name="brand" id="brand" className="filter-brand--select" 
//         onClick={updateFilterValue}>
//        {
//           companyOnlyData.map((curElem,index)=>{
//             return(
//               <option key={index} value={curElem} name="brand">
                
//                 {curElem}
//               </option>
//             )
//           })
//        }
//         </select>
//       </form>  

  

//       <button onClick={clearFilters}>clear filter</button>
//       </>
//     );
//   };
  
//   export default FilterProduct;
  

