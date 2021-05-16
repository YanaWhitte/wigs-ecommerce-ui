import s from './Sidebar.module.css';

const NavbarItem = ({ iconName, alt, linkName }) => {
  return <div className={s.navItem}>
    <img src={process.env.PUBLIC_URL + `/img/icons/${iconName}.svg`} alt={alt} />
    <a href="#">{linkName}</a>
  </div>
}

export default NavbarItem;