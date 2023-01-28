import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footerproduct from "../../components/footerProduct";

export function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginForm);
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
        navigate('/product')
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };
   
  useEffect(()=>{
      if(localStorage.getItem('@userLogin')){
        navigate('/product')
      }
  })

  return (
    <>
      <section className="fluid">
        <div className="container-fluid">
          <div className="row">
            {/* image */}
            <div className="col-lg-6 col-12 d-none d-sm-block d-md-none d-lg-block">
              <img
                src={require("../../assets/images/nathan-dumlao.jpg")}
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6" style={{ paddingBottom: "7rem" }}>
              <div className="section">
                <div className="container" id="logo">
                  <div className="row">
                    <div className="col-12 col-md-6 pt-4 my-auto">
                      <Link className="anchor secondary-color" to="/">
                        <img
                          src={require("../../assets/images/logocoffeeshop.png")}
                          alt=""
                          width={30}
                          height={30}
                          className=" d-inline-block "
                        />
                        Delicious Coffe Shop
                      </Link>
                    </div>
                    <div className="col-12 col-md-6 pt-4 d-grid gap-2 d-md-block">
                      <a
                        className="btn btn-Sign text-center float-end bg-warning"
                        href="/Coffeshop/signup.html"
                      >
                        sign up
                      </a>
                    </div>
                  </div>
                </div>
                <div className="container" style={{ paddingTop: "8rem" }}>
                  <div className="row text-sign text-center">
                    <p>Login</p>
                  </div>
                </div>
                {/* FORM */}
                <div className="container" id="form">
                  <div className="row float-end w-100">
                    <form onSubmit={handleLogin} className="p-5">
                      {validate.error && (
                         <div className="alert alert-danger  text-center" role="alert">
                         <div>{validate.message}</div>
                       </div>
                      )}
                      <div className="mb-3">
                        <label className="form-label">
                          Enter your Username :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Enter your password :
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="forgot mb-5">
                        <a href="#">
                          <p className="secondary-color">Forgot password?</p>
                        </a>
                      </div>

                      <div className="mb-3 d-grid gap-2">
                        <button
                          type="sumbit"
                          className="p-2 rounded-3 text-white btn-secondary anchor text-center"
                          href="#"
                        >
                          Login
                        </button>
                      </div>
                      <div className="mb-3 d-grid gap-2">
                        <a
                          className="btn btn-signup text-center btn-google"
                          href="/#"
                        >
                          <img
                            src="/Coffeshop/assets/img/sosmed/google.svg"
                            alt=""
                            className="secondary-color"
                          />
                          Sign up with Google
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                {/* end FORM */}
              </div>
            </div>
            <Footerproduct></Footerproduct>
          </div>
        </div>
      </section>
    </>
  );
}
