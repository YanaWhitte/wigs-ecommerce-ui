import React from 'react';
import s from './Header.module.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentActive: "products"
    }
  }

  render() {
    return <header className={s.header}>
      <label className={s.search}>
        <img src={process.env.PUBLIC_URL + "/img/icons/search.svg"} alt="search" className={s.searchIcon} />
        <input type="text" placeholder="Search store" />
      </label>
      <div className={s.menu}>
        <a href="#" onClick={() => this.setState({ currentActive: "products" })}
          className={`${s.menuItem} ${this.state.currentActive === "products" ? s.active : null}`}>products</a>
        <a href="#" onClick={() => this.setState({ currentActive: "story" })}
          className={`${s.menuItem} ${this.state.currentActive === "story" ? s.active : null}`}>story</a>
        <a href="#" onClick={() => this.setState({ currentActive: "manufacturing" })}
          className={`${s.menuItem} ${this.state.currentActive === "manufacturing" ? s.active : null}`}>manufacturing</a>
        <a href="#" onClick={() => this.setState({ currentActive: "packaging" })}
          className={`${s.menuItem} ${this.state.currentActive === "packaging" ? s.active : null}`}>packaging</a>
        <div className={s.icons}>
          <a href="#" className={s.basket}><img src={process.env.PUBLIC_URL + "/img/icons/basket.svg"} alt="basket" /></a>
          <a href="#" className={s.user}><img src={process.env.PUBLIC_URL + "/img/icons/person.svg"} alt="user" /></a>
        </div>
      </div>
    </header>
  }
}

export default Header;