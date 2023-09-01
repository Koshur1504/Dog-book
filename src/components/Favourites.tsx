import React, { useEffect, useState } from "react";
import "./Favourites.css";
import ResultCard from "./ResultCard";
import Header from "./Header";
import { useSelector } from "react-redux";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  let data = useSelector((state: any) => state.like.favourite)
  useEffect(()=> {
    setFavourites(data)
  },[data])

  return (
    <div className="favourites">
      <hr />
      <Header title={"Favourites"} />
      <div className="container">
        {favourites?.map((item, idx) => (
          <ResultCard url={item} key={idx} heart/>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
