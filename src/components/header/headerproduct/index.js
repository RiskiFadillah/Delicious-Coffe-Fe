import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const HeaderProduct = () => {
  return (
    <>
      <header className="border-bottom border-2 ">
        <div className="container">
          <nav className="navbar navbar-expand-lg my-4">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img
                  src={require("../../../assets/images/logocoffeeshop.png")}
                  alt="logo"
                  className="pb-2"
                />
                <p className="d-inline ps-2">Delicious Coffe</p>
              </a>
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
              <div
                className="collapse navbar-collapse justify-content-center px-5"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active mx-2" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <li className="nav-item">
                      <Link className="nav-link active mx-2" to="/ProductAdmin">
                        Product
                      </Link>
                    </li>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active mx-2" to="/chartproduct">
                      Cart Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="history.html">
                      History
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-lg-flex px-5">
                <div className="searchBox" style={{ marginRight: "-0.5rem" }}>
                  <input type="text" placeholder="Search" />
                  <i className="fa-sharp fa-solid fa-magnifying-glass" />
                </div>
                <a
                  className="mx-4"
                  href="chat.html"
                  style={{ marginTop: "0.7rem" }}
                ></a>
                <Dropdown as={ButtonGroup}>
                  <Button variant="white">
                    {" "}
                    <img
                      src={require("../../../assets/images/Cust-review/christopher-campbell.jpg")}
                      alt="dropdown image"
                      width={35}
                      height={35}
                      className="rounded-circle img-responsive"
                      data-toggle="dropdown"
                    />
                  </Button>

                  <Dropdown.Toggle
                    split
                    variant="white"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Section</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        localStorage.removeItem("@userLogin");
                      }}
                      href="#/action-3"
                      className="bg-danger"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* <img
                  src={require("../../../assets/images/Cust-review/christopher-campbell.jpg")}
                  alt="dropdown image"
                  width={35}
                  height={35}
                  className="rounded-circle img-responsive"
                  data-toggle="dropdown"
                /> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderProduct;
