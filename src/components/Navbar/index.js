import { Link } from "react-router-dom";
import "./styles.css"
const Navbar = ({ user }) => {
    console.log('Рендер Navbar', user);
    return (
      <nav>
          <div className="logo">
              <Link to={"/"}>
                  <img src="" alt="logo"></img>
              </Link>
          </div>
          <div className="user-menu">
              <Link to={"/boxes"}>Коробки</Link>
              <span className="notifications">Уведомления</span>
              <Link to={"/account"}>{user?.name?.first} {user?.name?.second}</Link>
          </div>
      </nav>
    )
  }
  
  export default Navbar;