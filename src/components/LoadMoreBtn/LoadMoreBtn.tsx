import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <button className={s.loadBtn} onClick={handleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
