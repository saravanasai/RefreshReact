import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>Sai</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
