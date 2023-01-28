import "./style/Detailproduct.css";
import Footerproduct from "../../components/footerProduct";
import HeaderProduct from "../../components/header/headerproduct";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header";

export function DetailProduct() {
  const { productId } = useParams();
  const [dataProductDetail, setDataProductDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/Products/${productId}`)
      .then((res) => {
        console.log(res.data.data.images);
        setDataProductDetail(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  // const handleDelete = (productId) => {
  //   const token = JSON.parse(localStorage.getItem("@userLogin"));
  //   console.log(token);
  //   const userLogin = token.token;
  //   axios({
  //     method: "DELETE",
  //     url: `http://localhost:5000/api/v1/Products/${productId}`,
  //     headers: {
  //       token: userLogin,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/product");
  //       alert('Product deletet')
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <Header />

      <main className="container1 pt-5 pb-5">
        <section className="product-img">
          <span className="favorite-promo text-center pb-5 fw-bold">
            {" "}
            Favorite &amp; Promo{" "}
            <span className="secondary-color">
              &gt; {dataProductDetail.title}
            </span>
          </span>
          {/* {dataProductDetail.map((item)=>{
            return(
              
            )
          })} */}
          <div className="chat-img">
            <div className="chat bg-light rounded-circle d-flex align-items-center px-1">
              <img
                src={require("../../assets/images/chat.webp")}
                width={30}
                height={30}
                alt="chat"
                className="text-center"
              />
            </div>
            <img
              src={`http://localhost:5000/uploads/images/${
                dataProductDetail.images
                  ? dataProductDetail.images[0].filename
                  : ""
              }`}
              alt="cold-brew"
              className="cold-brew"
            />
            {/* {dataProductDetail.images[0].filename} */}
          </div>
          <p className="pt-5 w-50 text-font-md">
            Delivery only on{" "}
            <span className="fw-bold text-bg-light">
              {" "}
              Monday to friday at 1 - 7 pm
            </span>
          </p>
        </section>
        <section className="product-details pt-5">
          <div className="ord-check-pay d-xxl d-flex">
            <div className="order px-2">
              <div className="ocp">
                <a href="#" className="primary-color">
                  <i className="fa-sharp fa-solid fa-check" />
                </a>
              </div>
              <p className="pt-2 text-ocp">Order</p>
            </div>
            <hr />
            <div className="line-ocp" />
            <div className="order px-2">
              <div className="ocp">
                <a href="#" className="primary-color">
                  <i className="fa-sharp fa-solid fa-check" />
                </a>
              </div>
              <p className="pt-2 text-ocp">Checkout</p>
            </div>
            <hr />
            <div className="line-ocp" />
            <div className="order px-2">
              <div className="ocp">
                <a href="#" className="primary-color">
                  <i className="fa-sharp fa-solid fa-check" />
                </a>
              </div>
              <p className="pt-2 text-ocp">Payment</p>
            </div>
          </div>
          <h1 className="fw-bold font-xxl pt-5">{dataProductDetail.title}</h1>
          <h2>{dataProductDetail.price}</h2>
          <p className="text-font-md">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <form action="product-details.html">
            <div className="mt-2">
              <select
                name="Select Size"
                id="select-size"
                className="select-option rounded-xl"
              >
                <option selected>Select Size</option>
                <option value={1}>Reguler</option>
                <option value={2}>Large</option>
                <option value={3}>Xtra Large</option>
              </select>
            </div>
            <div className="mt-2">
              <select
                name="Select Size"
                id="select-size"
                className="select-option rounded-xl"
              >
                <option selected>Select delivery method</option>
                <option value={1}>JNE</option>
                <option value={2}>JNT</option>
                <option value={3}>TIKI</option>
              </select>
            </div>
            <div className="input-number pt-5 d-flex gap-5">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                max={50}
                className="select-number rounded-xl"
              />
              <button
                type="submit"
                className="btn btn-secondary button-width-xxl"
              >
                Add to Cart
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-secondary button-width-xxl mt-5"
            >
              Checkout
            </button>
          </form>
            {/* <button
              type="click"
              className="btn btn-secondary button-width-xxl mt-2 bg-danger"
              onClick={() => handleDelete(productId)}
            >
              Delete
            </button> */}
        </section>
      </main>
      <Footerproduct />
    </>
  );
}
