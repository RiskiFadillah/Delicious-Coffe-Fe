import "./style/cart.style.css";
import Footerproduct from "../../components/footerProduct";
import HeaderProduct from "../../components/header/headerproduct";
import Header from "../../components/header";

export function ProductCart() {
  return (
    <>
      <Header />
      <main className="pay-del">
        <section className="container">
          <div>
            <h2 className="white-color pt-5 ">Checkout your item now!</h2>
            <div className="order-summ mt-5 border-radius-md">
              <h3 className="secondary-color font-weight-md text-center">
                {" "}
                Order Summary
              </h3>
              <div className="order pt-5 d-flex gap-3">
                <img
                  src="./css/img/Menu/HazelnutLatte.png"
                  alt="Hazelnut-latte"
                  width={80}
                  height={80}
                  className="border-radius-sm"
                />
                <p>
                  Hazelnut Latte <br />
                  1x <br />
                  Regular
                </p>
                <span className="pt-4 px-4">IDR 24.0</span>
              </div>
              <div className="order pt-2 d-flex gap-3">
                <img
                  src="./css/img/chicken-wing.png"
                  alt="Hazelnut-latte"
                  width={80}
                  height={80}
                  className="border-radius-sm"
                />
                <p>
                  Chicken Fire Wings <br />
                  2x <br />
                </p>
                <span className="pt-3">IDR 30.0</span>
              </div>
              <hr className="mt-4" />
              <div className="d-flex justify-content-between">
                <div className="flex">
                  <p>SUBTOTAL</p>
                  <p>TAX &amp; FEES</p>
                  <p>SHIPPING</p>
                </div>
                <div>
                  <p>IDR 120.000</p>
                  <p>IDR 20.000</p>
                  <p>IDR 10.000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h3>TOTAL</h3>
                <h3>IDR 150.000</h3>
              </div>
            </div>
          </div>
          {/* Address */}
          <section className="address-payment">
            <div className="d-flex justify-content-between">
              <h3 className="white-color">Address details</h3>
              <span className="white-color">edit</span>
            </div>
            <div className="addrress-container bg-light secondary-color">
              <p>
                {" "}
                <span className="fw-bold"> Delivery</span> to Iskandar Street
              </p>
              <hr />
              <p>Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
              <hr />
              <p>+62 81348287878</p>
            </div>
            <div className="d-flex justify-content-between pt-5">
              <h4 className="white-color">Payment method</h4>
            </div>
            <div className="addrress-container bg-light secondary-color">
              <input type="radio" id="card" name="card" />
              <label htmlFor="card">
                <i className="fa-sharp fa-solid fa-credit-card orange-bg white-color" />
                Card
              </label>
              <hr />
              <input type="radio" id="bank" name="bank" />
              <label htmlFor="bank">
                <i className="fa-sharp fa-solid fa-building-columns brown-bg white-color"></i>
                Bank Account
              </label>
              <hr />
              <input type="radio" id="cod" name="cod" />
              <label htmlFor="cod">
                <i className="fa-sharp fa-solid fa-truck bg-warning" />
                Cash on Delivery
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-secondary button-width-xxl mt-5"
            >
              Confirm and Pay
            </button>
          </section>
        </section>
      </main>
      <Footerproduct />
    </>
  );
}
