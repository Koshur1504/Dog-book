import React, { FC, useState } from "react";
import "./searchbox.css";
import { icons } from "../assets/icons";
import { useDispatch,useSelector } from "react-redux";
import { search } from "../redux/reducer";


const SearchBox = () => {
  const dispatch =useDispatch()
  const [searchParam, setSearchParam] = useState("");
  const searchFn = (e?:any) => {
    setSearchParam((old) => e.target.value);
    dispatch(search(e.target.value))
  };
let state = useSelector((state:any) => state.like.searchParam)


  return (
    <div className="searchbox">
      <input
        value={searchParam}
        onChange={(e) => searchFn(e)}
        type="text"
        placeholder={state}
      />
      <button>
        <img src={icons.searchIcon} alt="" /> Search
      </button>
    </div>
  );
};

export default SearchBox;
