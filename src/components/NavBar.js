const NavBar = () => {
  return (
    <div className="navbar">
      <h2>Sai</h2>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  );
};

export default NavBar;
