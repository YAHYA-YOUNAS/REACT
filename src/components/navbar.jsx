// Stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          Counter App 
          <span className="badge rounded-pill bg-secondary mx-1">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
