import React from "react";
import "./films.css";
import FilmVazgecme from "../Components/FilmVazgecme";
import FilmSliuet from "../Components/FilmSliuet";

const Films = () => {
  return (
    <div className="Film">
      <div className="filmVazgecme">
        <FilmVazgecme />
        <FilmSliuet />
      </div>
    </div>
  );
};

export default Films;
