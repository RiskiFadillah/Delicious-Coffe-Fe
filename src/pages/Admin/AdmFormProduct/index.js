import { Link,useNavigate } from "react-router-dom";
import Footerproduct from "../../../components/footerProduct";
import HeaderProduct from "../../../components/header/headerproduct";
import Uploadimg from "../../../components/Upload";
import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/header";
import "../AdmFormProduct/styles/AdmFormproduct.css";

export function AdmFormProductPage() {
  const [images, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(null);
  const [formAddProduct, setformAddProduct] = useState({
    title: "",
    price: "",
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(e.target, "test target");
    const token = JSON.parse(localStorage.getItem("@userLogin"));
    console.log(token);
    const userLogin = token.token;
    console.log(userLogin, "Token");
    e.preventDefault();

    console.log(formAddProduct.title);
    console.log(formAddProduct.price);
    console.log(images);
    const data = new FormData(e.target);
    data.append("title", formAddProduct.title);
    data.append("price", formAddProduct.price);
    data.append("img", images);

    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/Products",
      headers: {
        "content-type": "multipart/form-data",
        token: userLogin,
      },
      data: data,
    })
      .then((res) => {
        navigate("/ProductAdmin");
        alert("Product added");
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };

  return (
    <>
      <Header />
      {localStorage.getItem("@userLogin") ? (
        <main>
          <section className="container d-flex flex-wrap">
            <div className="">
              <div className="form-product">
                <div className="mx-5">
                  <form onSubmit={onSubmit} className="row">
                    <Link>Favorite & Promo &#62; </Link>
                    <Link>Add new Product</Link>
                    <div className="mt-5 col">
                      <div className="d-grid gap-2 pt-5 pb-5">
                      <Uploadimg
                        onChange={(e) => onImageUpload(e)}
                        img={imagePrev}
                      ></Uploadimg>
                        <button className="btn btn-primary p-3 " type="button">
                          Take a picture
                        </button>

                        <div className="pt-5">
                          <h5 className="secondary-color">Delivery Hour :</h5>
                          <select
                            className="form-select p-3"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <select
                            className="form-select p-3 mt-3"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="pt-5 pb-5">
                          <h5 className="secondary-color">Input Stock :</h5>
                          <select
                            className="form-select p-3"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="pt-5 pb-5">
                          <h5 className="secondary-color">Category :</h5>
                          <select
                            className="form-select p-3"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Open this select menu</option>
                            <option value={1}>Coffe</option>
                            <option value={2}>Non Coffe</option>
                            <option value={3}>Foods</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col mx-5 mb-5">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Name :
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="input-form"
                          onChange={(e) =>
                            setformAddProduct({
                              ...formAddProduct,
                              title: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Price :
                        </label>
                        <input
                          type="text"
                          id="price"
                          className="input-form"
                          onChange={(e) =>
                            setformAddProduct({
                              ...formAddProduct,
                              price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Description :
                        </label>
                        <input
                          type="email"
                          className="input-form"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <div className="pt-3">
                        <h5>Input product size :</h5>
                        <p>Click methods you want use for this product</p>
                        <div className="p-1 d-flex justify-content-between">
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id="r-size"
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                R
                              </span>
                            </label>
                          </div>
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id=""
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                L
                              </span>
                            </label>
                          </div>
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id=""
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                XL
                              </span>
                            </label>
                          </div>
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id="r-size"
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                200gr
                              </span>
                            </label>
                          </div>
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id=""
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                300gr
                              </span>
                            </label>
                          </div>
                          <div class="check-box">
                            <input
                              className="position-absolute m-2"
                              type="checkbox"
                              value=""
                              id="r-size"
                            />
                            <label
                              className="form-check-label"
                              htmlfor="flexCheckDefault"
                            >
                              <span className=" text-center chs-mtd btn-circle d-flex justify-content-center align-items-center">
                                400gr
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>Input delivery methods :</h5>
                        <p>Click you want to use for this product</p>
                        <a href="#" className="btn btn-warning">
                          Home Delivery
                        </a>
                        <a href="#" className="btn btn-warning mx-3">
                          Dine in
                        </a>
                        <a href="#" className="btn btn-secondary">
                          Take Away
                        </a>
                      </div>
                      <button
                        title="Save"
                        type="submit"
                        className=" rounded-2 mt-5 p-3 w-100 brown-bg text-white"
                        
                      >
                        Save Product
                      </button>
                      <button
                        type="cancel"
                        className="btn btn-secondary mt-2 p-3 w-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <>Token is require</>
      )}

      <Footerproduct />
    </>
  );
}
