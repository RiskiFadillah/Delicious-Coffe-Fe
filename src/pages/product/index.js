import "./styles/product.page.css";
import Footerproduct from "../../components/footerProduct";
import HeaderProduct from "../../components/header/headerproduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader.js";
import Header from "../../components/header";

export function Productpage() {
  const [done, setDone] = useState(undefined);
  const [refetch, setRefetch] = useState(false);
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const gotoDetail = (id) => {
    navigate(`/product/${id}`);
  };
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/Products${
          keyword && `?search=${keyword}`
        }`
      )
      .then((res) => {
        // console.log(res.data.data);
        setDataProduct(res.data.data);
        setDone(true);
      })
      .catch((err) => console.log(err));
  }, [refetch, keyword]);

  return (
    <>
      <Header />
      {/* Akhir Navbar */}
      {/* Main  */}
      {/* Aside */}
      <main className="container row px-5 mx-5">
        <div className="col-lg-4 border-end mt-5">
          <div className="text-promo text-center p-5">
            <h3>Promo Today</h3>
            <p>Coupons will be updated every weeks. Check them out!</p>
          </div>
          <div className="card-event check-color px-auto d-flex mx-auto mb-3 p-3">
            <img
              src={require("../../assets/images/PromoDay/image 46.png")}
              alt=""
            />
            <div className="text-event text-center pt-2">
              <h6>HAPPY MOTHER’S DAY!</h6>
              <p>Get one of our favorite menu for free!</p>
            </div>
          </div>
          <div className="card-event orange-color d-flex mx-auto mb-3 p-3">
            <img
              src={require("../../assets/images/PromoDay/promo2.png")}
              alt=""
            />
            <div className="text-event text-center">
              <h6>Get a cup of coffee for free on sunday morning</h6>
              <p>Only at 7 to 9 AM</p>
            </div>
          </div>
          <div className="card-event check-color d-flex mx-auto mb-3 p-3">
            <img
              src={require("../../assets/images/PromoDay/image 46.png")}
              alt=""
            />
            <div className="text-event text-center">
              <h6>HAPPY MOTHER’S DAY!</h6>
              <p>Get one of our favorite menu for free!</p>
            </div>
          </div>
          <div className="card-event light-brown d-flex mx-auto mb-3 p-3">
            <img
              src={require("../../assets/images/PromoDay/promo3.png")}
              alt=""
            />
            <div className="text-event text-center">
              <h6>HAPPY HALLOWEEN!</h6>
              <p>
                Do you like chicken wings? Get 1 free only if you buy pinky
                promise
              </p>
            </div>
          </div>
          <div className="terms">
            <h6>Terms and Condition</h6>
            <p>1. You can only apply 1 coupon per day</p>
            <p>2. It only for dine in</p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p>4. Should make member card to apply coupon</p>
          </div>
          <div className="btn  text-center d-grid gap-2">
            <button className="btn  text-center d-grid gap-2 bg-warning">
              Claim Coupon
            </button>
          </div>
        </div>
        {/* Akhir Aside  */}
        {/* Menu Product */}
        <section className="col-lg-8">
          {/* tabs */}
          <nav>
            <div
              className="nav nav-tabs ms-3 list-menu pt-5"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-favorite-products-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-favorite-products"
                type="button"
                role="tab"
                aria-controls="nav-favorite-products"
                aria-selected="true"
              >
                Favorite Products
              </button>
              <button
                className="nav-link"
                id="nav-coffee-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-coffee"
                type="button"
                role="tab"
                aria-controls="nav-coffee"
                aria-selected="false"
              >
                Coffee
              </button>
              <button
                className="nav-link"
                id="nav-non-coffee-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-non-coffee"
                type="button"
                role="tab"
                aria-controls="nav-non-coffee"
                aria-selected="false"
              >
                Non Coffee
              </button>
              <button
                className="nav-link"
                id="nav-foods-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-foods"
                type="button"
                role="tab"
                aria-controls="nav-foods"
                aria-selected="false"
              >
                Foods
              </button>
              <button
                className="nav-link"
                id="nav-add-on-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-add-on"
                type="button"
                role="tab"
                aria-controls="nav-add-on"
                aria-selected="false"
              >
                Add-on
              </button>
              
            </div>
          </nav>

          {/* Menu */}
          {!done ? (
            <Loader></Loader>
          ) : (

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-favorite-products"
                role="tabpanel"
                aria-labelledby="nav-favorite-products-tab"
                tabIndex={0}
              >
                <input
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="example : Kopi"
                type="text"
                className="input-container mt-5 "
              ></input>
              
                {/* isi */}
                {/* 1 */}
                <div className="pt-5 our-menu d-flex flex-wrap ">
                  {dataProduct.map((item) => {
                    console.log(item.images, "Hello");
                    return (
                      <div
                        key={item.id}
                        className="g-col-6 g-col-md-4 menu-food-drink popup"
                      >
                        <div className="menu-img-disc">
                          <img
                            src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                            alt=""
                            className="w-75 rounded-circle img-disc"
                          />
                        </div>
                        {/* <span className="discount position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        10%
                      </span> */}
                        <h4
                          className="pt-5 pb-3 text-center fw-bold"
                          onClick={() => {
                            gotoDetail(item.id);
                          }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-center fw-bold">{item.price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-coffee"
                role="tabpanel"
                aria-labelledby="nav-coffee-tab"
                tabIndex={0}
              >
                <div className="pt-5 our-menu d-flex flex-wrap px-5">
                  <div className="pt-5 our-menu d-flex flex-wrap">
                    {dataProduct.map((item) => {
                      console.log(item.images[0].filename);
                      return (
                        <div
                          key={item.id}
                          className="g-col-6 g-col-md-4 menu-food-drink popup"
                        >
                          <div className="menu-img-disc">
                            <img
                              src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                              alt=""
                              className="w-75 rounded-circle position-relative img-disc"
                            />
                          </div>
                          {/* <span className="discount position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        10%
                      </span> */}
                          <h4 className="pt-5 pb-3 text-center fw-bold">
                            {item.title}
                          </h4>
                          <p className="text-center fw-bold">{item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div
                className="tab-pane fade"
                id="nav-non-coffee"
                role="tabpanel"
                aria-labelledby="nav-non-coffee-tab"
                tabIndex={0}
              >
                <div className="d-flex flex-wrap py-5 px-5 text-center">
                  <div className="pt-5 our-menu d-flex flex-wrap">
                    {dataProduct.map((item) => {
                      console.log(item.images[0].filename);
                      return (
                        <div
                          key={item.id}
                          className="g-col-6 g-col-md-4 menu-food-drink popup"
                        >
                          <div className="menu-img-disc">
                            <img
                              src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                              alt=""
                              className="w-75 rounded-circle position-relative img-disc"
                            />
                          </div>
                          {/* <span className="discount position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        10%
                      </span> */}
                          <h4 className="pt-5 pb-3 text-center fw-bold">
                            {item.title}
                          </h4>
                          <p className="text-center fw-bold">{item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                className="tab-pane fade"
                id="nav-foods"
                role="tabpanel"
                aria-labelledby="nav-foods-tab"
                tabIndex={0}
              >
                <div className="pt-5 our-menu d-flex flex-wrap">
                  {dataProduct.map((item) => {
                    console.log(item.images[0].filename);
                    return (
                      <div
                        key={item.id}
                        className="g-col-6 g-col-md-4 menu-food-drink popup"
                      >
                        <div className="menu-img-disc">
                          <img
                            src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                            alt=""
                            className="w-75 rounded-circle position-relative img-disc"
                          />
                        </div>
                        {/* <span className="discount position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        10%
                      </span> */}
                        <h4 className="pt-5 pb-3 text-center fw-bold">
                          {item.title}
                        </h4>
                        <p className="text-center fw-bold">{item.price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-add-on"
                role="tabpanel"
                aria-labelledby="nav-add-on-tab"
                tabIndex={0}
              >
                <div className="d-flex flex-wrap py-5 px-5">
                  <div className="pt-5 our-menu d-flex flex-wrap">
                    {dataProduct.map((item) => {
                      console.log(item.images[0].filename);
                      return (
                        <div
                          key={item.id}
                          className="g-col-6 g-col-md-4 menu-food-drink popup"
                        >
                          <div className="menu-img-disc">
                            <img
                              src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                              alt=""
                              className="w-75 rounded-circle position-relative img-disc"
                            />
                          </div>
                          {/* <span className="discount position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        10%
                      </span> */}
                          <h4 className="pt-5 pb-3 text-center fw-bold">
                            {item.title}
                          </h4>
                          <p className="text-center fw-bold">{item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Akhir Menu */}
          <p className="secondary-color p-4 pt-5">
            *the price has been cutted by discount appears
          </p>
          <section>
            <Link className="nav-link active mx-2" to="/AdmEditProduct">
              Edit Product
            </Link>
            <Link className="nav-link active mx-2" to="/AdmFormProduct">
              Add New Product
            </Link>
          </section>
        </section>
      </main>

      <Footerproduct />
    </>
  );
}

//export default Productpage;
