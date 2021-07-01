import NavbarItem from './NavbarItem';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return <aside className={s.sidebar}>
    <div className={s.navHolder}>
      <nav>
        <img src={process.env.PUBLIC_URL + "/img/icons/logo.svg"} alt="logo" width="93" height="44" className={s.logo} />
        <h2 className={s.title}>Explore</h2>
        <NavbarItem classname={s.navItem} iconName={"new"} alt={"new"} linkName={"New In"} />
        <NavbarItem classname={s.navItem} iconName={"clothing"} alt={"clothing"} linkName={"Clothing"} />
        <NavbarItem classname={s.navItem} iconName={"shoes"} alt={"shoes"} linkName={"Shoes"} />
        <NavbarItem classname={s.navItem} iconName={"accessories"} alt={"accessories"} linkName={"Accessories"} />
        <NavbarItem classname={s.navItem} iconName={"activewear"} alt={"activewear"} linkName={"Activewear"} />
        <NavbarItem classname={s.navItem} iconName={"gifts"} alt={"gifts"} linkName={"Gifts & Living"} />
        <NavbarItem classname={s.navItem} iconName={"inspiration"} alt={"inspiration"} linkName={"Inspiration"} />
      </nav>
      <NavbarItem classname={s.help} iconName={"help"} alt={"help"} linkName={"Help Center"} />
    </div>
  </aside>
}

export default Sidebar;