import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>That page can not found</p>
      <NavLink to="/" >Go to the homepage...</NavLink>
    </div>
  );
};

export default NotFound;
