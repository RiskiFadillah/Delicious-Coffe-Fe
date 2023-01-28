import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg w-100 position-fixed bg-white">
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <Link className="nav-link active mx-2" to="/">
                <img
                  src={require("../../../assets/images/logocoffeeshop.png")}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3 d-inline-block align-text-top my-auto"
                />
                Delicious Cofee Shop
              </Link>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link active mx-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active mx-2" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active mx-2" to="/chartproduct">
                  Cart Product
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/Coffeshop/history.html">
                  History
                </a>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item mx-1">
                  <Link
                    className="nav-link btn-Sign text-center"
                    to="/LoginPage"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-1 bg-warning rounded-pill">
                  <Link
                    className="nav-link btn-Sign text-center"
                    to="/RegisterPage"
                  >
                    Sing Up
                  </Link>
                </li>
                {/* <li class="nav-item mx-1">
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderHome;
