import React, { useState } from "react";
import { FaSearch} from "react-icons/fa";

const SearchBar =({filterStatus, 
    onFilterStatusChange, 
    filterCategory, 
    onFilterCategoryChange }) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
      setSearchTerm(event.target.value); // ✅ Search term updates on change
    
    };

    return(
        <di>
        <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" className="search-bar" placeholder="Search..." />
              </div>
        <div className="header-right">
        <select value={filterStatus} onChange={onFilterStatusChange}>
          <option value="">All Status</option>
          <option value="Published">Published</option>
          <option value="Inactive">Inactive</option>
          <option value="Stock Out">Stock Out</option>
          <option value="Draft List">Draft List</option>
        </select>
        <select value={filterCategory} onChange={onFilterCategoryChange}>
          <option value="">All Categories</option>
          <option value="Sunglass">Sunglass</option>
          <option value="Clothes">Clothes</option>
          <option value="Beauty">Beauty</option>
          <option value="Shoes">Shoes</option>
          <option value="Electronic">Electronic</option>
          <option value="Watch">Watch</option>
          <option value="Cap">Cap</option>
        </select>
  
        <button>Filter</button>
        <button>Import</button>
        <button>Export</button>
        <button>+ Add Product</button>
      </div>
      </di>
    );
};

export default SearchBar;
