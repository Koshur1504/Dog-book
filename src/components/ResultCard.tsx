import React, { useEffect, useState } from "react";
import "./resultcard.css";
import { icons } from "../assets/icons/index";
import { useSelector, useDispatch } from "react-redux";
import { dislike, like } from "../redux/reducer";

const ResultCard = ({ url }: any) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  let data = useSelector((state: any) => state.like.favourite);
  const fetchLike = () => {
    if (data?.includes(url)) {
      console.log(data);
      setLiked(true);
    } else setLiked(false);
  };
  useEffect(() => {
    fetchLike();
  }, [data, localStorage, liked]);

  const handleLike = () => {
    if (liked) {
      dispatch(dislike(url));
    }
    if (!liked) {
      dispatch(like(url));
    }
  };
  return (
    <div className="resultcard" style={{ backgroundImage: `url(${url})` }}>
      <div className="heart" onClick={handleLike}>
        <img
          src={`${liked ? icons.redHeartIcon : icons.whiteHeartIcon}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResultCard;
