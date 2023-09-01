import { useEffect, useState } from "react";
import "./SearchResults.css";
import ResultCard from "./ResultCard";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/reducer";

const SearchResults = () => {
  const [searchedBreed, setSearchedBreed] = useState([]);
  const [error, setError] = useState("");

  let state = useSelector((state: any) => state.like.searchParam);

  const url = `https://dog.ceo/api/breed/${state}/images/random/10`;

  const fetcher = async () => {
    try {
      let data = await fetch(url).then((res) => (data = res.json()));
      if (data.status === "success") {
        setSearchedBreed((old) => data.message);
      } else {
        setError((old) => data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [state]);

  return (
    <div className="SearchResults">
      {searchedBreed?.map((item, idx) => (
        <ResultCard url={item} key={idx} />
      ))}
    </div>
  );
};

export default SearchResults;
