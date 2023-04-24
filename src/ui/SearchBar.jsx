import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
    setShowCategories(false);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    console.log(searchValue, selectedCategory);
    resetInputField();
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
    <form className="relative items-center justify-center w-[477px] h-32">
      <div className="relative items-center justify-center mr-2">
        <input
          className="w-full h-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-outline"
          type="text"
          value={searchValue}
          onChange={handleSearchInputChanges}
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            className="flex items-center justify-center h-full px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-outline"
            type="button"
            onClick={toggleCategories}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.000 15.586l6.293-6.293 1.414 1.414-7.707 7.707-7.707-7.707 1.414-1.414 6.293 6.293z"></path></svg>
          </button>
          {showCategories && (
            <div className="absolute z-10 right-0 w-full mt-1 bg-white rounded-md shadow-lg">
              <select
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-outline"
                value={selectedCategory}
                onChange={handleCategorySelect}
              >
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <button
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 text-white bg-blue-500 rounded-md focus:outline-none focus:bg-blue-600"
        type="submit"
        onClick={callSearchFunction}
      >
        <FaSearch />
      </button>
    </form>
    </>
  );
};

export default SearchBar;
