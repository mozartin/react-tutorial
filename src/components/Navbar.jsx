import { NavLink } from "react-router-dom";

const Navbar = () => {
   const setActive = ({isActive}) => (isActive? "active": "")
   return ( 
      <nav className="navbar">
         <h1>The Dojo Blog</h1>
         <div className="links">
            <NavLink to="/" className={setActive}>Home</NavLink>
            <NavLink to="/create" className={setActive}>New Blog</NavLink>
         </div>
      </nav>
    );
}
 
export default Navbar;