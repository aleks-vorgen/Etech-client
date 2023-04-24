import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterData } from "../store/reducers/dataSlice";

const SearchBar1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filterData(e.target.value));
  };

  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="px-2 py-1 border border-gray-400 rounded-md w-48"
      />
    </div>
  );
};

export default SearchBar1;