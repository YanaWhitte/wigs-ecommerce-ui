import NavbarItem from './NavbarItem';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return <aside className={s.sidebar}>
    <nav>
      <img src={process.env.PUBLIC_URL + "/img/icons/logo.svg"} alt="logo" width="93" height="44" className={s.logo} />
      <h2 className={s.title}>Explore</h2>
      <NavbarItem iconName={"new"} alt={"new"} linkName={"New In"} />
      <NavbarItem iconName={"clothing"} alt={"clothing"} linkName={"Clothing"} />
      <NavbarItem iconName={"shoes"} alt={"shoes"} linkName={"Shoes"} />
      <NavbarItem iconName={"accessories"} alt={"accessories"} linkName={"Accessories"} />
      <NavbarItem iconName={"activewear"} alt={"activewear"} linkName={"Activewear"} />
      <NavbarItem iconName={"gifts"} alt={"gifts"} linkName={"Gifts & Living"} />
      <NavbarItem iconName={"inspiration"} alt={"inspiration"} linkName={"Inspiration"} />
    </nav>
    <div className={s.help}>
      <img src={process.env.PUBLIC_URL + "/img/icons/help.svg"} alt="help" />
      <a href="#">Help Center</a>
    </div>
  </aside>
}

export default Sidebar;