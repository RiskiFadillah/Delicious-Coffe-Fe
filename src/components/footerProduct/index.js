const Footerproduct = () => {
  return (
    <>
      <footer className="position-relative">
        <div className="fluid" style={{ background: "#f8f8f8" }}>
          {/* footer */}
          <div className="container h-100">
            <div className="row" style={{ padding: "10rem 1rem" }}>
              {/* promo */}
              <div className="col-12 col-sm-6 col-md-8">
                <div
                  className="footer-social text-decoration-none"
                  style={{ width: "60%" }}
                >
                  <a
                    className="text-decoration-none"
                    href="/Coffeshop/index.html"
                  >
                    <img
                      src={require("../../assets/images/logocoffeeshop.png")}
                      alt=""
                      width={30}
                      height={30}
                      className="me-3 d-inline-block align-text-top my-auto"
                    />
                    Delicious Coffe
                  </a>
                  <p className="mt-3">
                    Coffee Shop is a store that sells some good meals, and
                    especially coffee. We provide high quality beans
                  </p>
                  <span className="social">
                    <img
                      src="/Coffeshop/assets/img/sosmed/fb.svg"
                      alt=""
                      className="me-2"
                    />
                    <img
                      src="/Coffeshop/assets/img/sosmed/twitter.svg"
                      alt=""
                      className="me-2"
                    />
                    <img
                      src="/Coffeshop/assets/img/sosmed/ig.svg"
                      alt=""
                      className="me-2"
                    />
                  </span>
                  <div>
                    <p className="mt-3 footnote">©2020CoffeeStore</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-2">
                <div className="text-footer">
                  <a
                    href="/Coffeshop/product.html"
                    className="text-decoration-none"
                  >
                    <p className="text-active">Product</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Pricing</p>{" "}
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Location</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Countries</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Blog</p>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-2">
                <div className="text-footer">
                  <a href="#" className="text-decoration-none">
                    <p className="text-active">Engage</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Coffeshop ?</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>FAQ</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>About Us</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Privacy Police</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Term of Service</p>
                  </a>
                </div>
              </div>
            </div>
            {/* end promo */}

            {/* end promo */}
          </div>
          {/* footer */}
        </div>
      </footer>
    </>
  );
};

export default Footerproduct;
