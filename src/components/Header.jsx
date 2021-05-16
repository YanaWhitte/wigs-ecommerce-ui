import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
    <div className={s.search}>
      <img src={process.env.PUBLIC_URL + "/img/icons/search.svg"} alt="search" className={s.searchIcon} />
      <input type="text" placeholder="Search store" />
    </div>
    <div className={s.menu}>
      <a href="#" className={`${s.menuItem} ${s.active}`}>products</a>
      <a href="#" className={s.menuItem}>story</a>
      <a href="#" className={s.menuItem}>manufacturing</a>
      <a href="#" className={s.menuItem}>packaging</a>
      <div>
        <a href="#" className={s.basket}><img src={process.env.PUBLIC_URL + "/img/icons/basket.svg"} alt="basket" /></a>
        <a href="#" className={s.user}><img src={process.env.PUBLIC_URL + "/img/icons/person.svg"} alt="user" /></a>
      </div>
    </div>
  </header>
}

export default Header;