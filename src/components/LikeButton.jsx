import { useState } from 'react';
import s from './Content.module.css';

const LikeButton = ({ isPressed, onClick, onMouseEnter, onMouseLeave }) => {
  return <a onClick={onClick} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`${s.like} ${isPressed ? s.pressed : ""}`}>
    <img src={process.env.PUBLIC_URL + "/img/icons/like.svg"} alt="like" />
  </a>
}

export default LikeButton;