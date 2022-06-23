import { Outlet,  NavLink } from "react-router-dom";
import "../App.css";
const Layout = () => {
  return (
    <>
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
     <a className="nav-link"><NavLink className="nav-link" to="/">Home</NavLink></a> 
      </li>
      <li className="nav-item">
      <a className="nav-link"><NavLink className="nav-link" to="/blogs">Blogs</NavLink></a> 
      </li>
      <li className="nav-item">
      <a className="nav-link"><NavLink className="nav-link" to="/contact">Contact</NavLink></a>  
      </li>
      
    </ul>
  </div>
</nav>














{/* 
      <nav>
        <ul>
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};
export default Layout;