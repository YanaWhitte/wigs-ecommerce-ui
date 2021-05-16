import s from './LikeButton.module.css';

const LikeButton = () => {
  return <div className={s.like}>
    <img src={process.env.PUBLIC_URL + "/img/icons/like.svg"} alt="like" />
  </div>
}

export default LikeButton;