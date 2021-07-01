import s from './Content.module.css';
import purplePhoto from '../photos/img-3.png';
import bluePhoto from '../photos/img-4.png';
import pinkPhoto from '../photos/img-5.png';
import greenPhoto from '../photos/img-6.png';
import LikeButton from './LikeButton';
import { useState } from 'react';

const Content = () => {
  return <div className={s.content}>
    <div className={`${s.card} ${s.horizontalCard} ${s.discountCard}`}>GET UP TO 50% OFF</div>
    <CardWithLike><img className={`${s.card} ${s.purpleImg}`} src={purplePhoto} alt="photo" /></CardWithLike>
    <CardWithLike><img className={`${s.card} ${s.bluePhoto}`} src={bluePhoto} alt="photo" /></CardWithLike>
    <div className={`${s.card} ${s.horizontalCard} ${s.summerCard}`} />
    <CardWithLike><img className={`${s.card} ${s.pinkPhoto}`} src={pinkPhoto} alt="photo" /></CardWithLike>
    <CardWithLike><img className={`${s.card} ${s.greenPhoto}`} src={greenPhoto} alt="photo" /></CardWithLike>
    <div className={`${s.card} ${s.horizontalCard} ${s.trendingCard}`}>
      <h2>Trending & Hot</h2>
      <p>A collection of most trending items.</p>
    </div>
    <div className={`${s.card} ${s.horizontalCard} ${s.newInStoreCard}`}>
      <h2>Buy it for the first time</h2>
      <p>New in store. Try it before anyone else.</p>
    </div>
  </div>
}

const CardWithLike = ({ children }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [scaled, setScaled] = useState(false);

  return <div className={`${s.vericalCard} ${scaled ? s.scaled : ''}`}>{children}
    <LikeButton onClick={() => setIsPressed(!isPressed)} onMouseEnter={() => setScaled(true)} onMouseLeave={() => setScaled(false)} isPressed={isPressed} />
  </div>
}

export default Content;