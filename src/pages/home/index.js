import "./styles/style.home.css";
import "../../components/footer/index";
import Footer from "../../components/footer/index";
import HeaderHome from "../../components/header/headerHomePage";
import Header from "../../components/header";
//import { useMediaQuery } from "react-responsive";

export function HomePage() {
  return (
    <>
        <Header />
      <main>
        {/* Navbar */}

        {/* Akhir Navbar */}
        {/* Jumbotron */}
        <section id="hero">
          <div className="hero-1 position-absolute" style={{ top: "20%" }} />
          <div className="container h-100">
            <div className="row h-100">
              <div
                className="col-lg-7 col-sm hero-tagline text-white"
                style={{ marginTop: "15%", zIndex: 2 }}
              >
                <h1>Start Your Day with Coffee and Good Meals</h1>
                <p>
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <a
                  className="btn btn-get rounded text-center bg-warning"
                  href="/Coffeshop/product.html"
                >
                  <p className="my-2">Get Started</p>
                </a>
              </div>
            
            </div>
          </div>
        </section>

        {/* Akhir Jumbotron */}
        {/* rectangle */}
        <section className="container-rectangle container bg-light mt-2">
          <div className="secondary-color d-flex">
            <i className="fa-solid fa-user bg-warning rounded-5 icon-md" />
            <div className="ket-recta">
              <h5>90+</h5>
              <span>Staff</span>
            </div>
          </div>
          <div className="line line-color" />
          <div className="d-flex secondary-color">
            <i className="fa-solid fa-location-dot rounded-5 icon-md bg-warning" />
            <div className="ket-recta">
              <h5>30+</h5>
              <span>Store</span>
            </div>
          </div>
          <div className="line line-color" />
          <div className="d-flex secondary-color">
            <i className="fa-regular fa-heart bg-warning rounded-5 icon-md" />
            <div className="ket-recta">
              <h5>800+</h5>
              <span>Customer</span>
            </div>
          </div>
        </section>
        {/* Akhir rectangle */}
        {/* Quality */}
        <section className="container col-12 mt-5">
          <div className="  d-flex pt-5">
            <div className="quality">
              <img
                src={require("../../assets/images/team-work.png")}
                width={450}
                alt="team-work"
              />
            </div>
            <div className="gap-sm-1 mb-3">
              <h4 className="font-weight-md font-md">
                We Provide Good Coffee and Healty Meals
              </h4>
              <p className="text-font-p">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <ul className="info-list none-list-type d-flex flex-column">
                <li>
                  <i className="fa-solid fa-check check-color border-radius-md icon-sm" />
                  High quality beens
                </li>
                <li>
                  <i className="fa-solid fa-check check-color border-radius-md icon-sm" />
                  Healthy meals, you can request the ingredients
                </li>
                <li>
                  <i className="fa-solid fa-check check-color border-radius-md icon-sm" />
                  Chat with our staff to get better experience for ordering
                </li>
                <li>
                  <i className="fa-solid fa-check check-color border-radius-md icon-sm" />
                  Free member card with a minimum purchase of IDR 200.000.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Akhir Quality */}
        {/* People Favorite */}
        <section className="favorite">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 mx-auto text flex-wrap">
                <h2 className="fontc-primary text-center">
                  Here is People’s Favorite
                </h2>
                <p className="sub-tittle mx-auto fontc-secondary">
                  Let’s choose and have a bit taste of poeple’s favorite. It
                  might be yours too!
                </p>
              </div>
            </div>
            <div className="row food mt-5 text-center">
              <div className="col-3 rounded-3 card-container">
                <img
                  src={require("../../assets/images/Hazelnut-latte.png")}
                  alt="Hazelnut-latte"
                  className="rounded-pill"
                />
                <h5 className="pt-4">Hazelnut latte</h5>
                <ul className="none-list-typle line-text-md">
                  <li>
                    <i className="fa-solid fa-check" />
                    HazelnutSyrup
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Wanilla Whipped Cream
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Ice / Hot
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Sliced Banana Top
                  </li>
                </ul>
                <h4 className="pb-2 pt-5">IDR 25.000</h4>
                <button className="button-primary btn rounded-pill btn-outline-warning mb-5">
                  Select
                </button>
              </div>
              <div className="col-3 mx-5 rounded-3 card-container">
                <img
                  src={require("../../assets/images/pinky-promise.png")}
                  alt="Pinky-Promise"
                  className="rounded-pill"
                />
                <h5 className="pt-4">Pinky Promise</h5>
                <ul className="none-list-typle line-text-sm">
                  <li>
                    <i className="fa-solid fa-check" />1 Shot Of Coffe
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Wanilla Whipped Cream
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Chocolate Biscuits
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Strawberry Syrups
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Sliced Strawberry on Top
                  </li>
                </ul>
                <h4 className="pb-2 pt-5">IDR 30.000</h4>
                <button className="button-primary btn rounded-pill btn-outline-warning mb-5">
                  Select
                </button>
              </div>
              <div className="col-3  rounded-3 card-container">
                <img
                  src={require("../../assets/images/chicken-wing.png")}
                  alt="chicken-wing"
                  className="rounded-pill"
                />
                <h5 className="pt-4">Chicken Wing</h5>
                <ul className="none-list-typle line-text-sm">
                  <li>
                    <i className="fa-solid fa-check" />
                    Wings
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Drum Sticks
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Mayonise and Lemon
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Hot Fried
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Secret Recipe
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Buy 1 Get 1 only for Dine in
                  </li>
                </ul>
                <h4 className="pb-2">IDR 40.000</h4>
                <button className="button-primary btn rounded-pill btn-outline-warning">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Akhir People Favorite */}
        {/* Our Store */}
        <section className="container mt-5 d-flex flex-column">
          <div className="container-fave text-center">
            <h4 className="font-md font-weight-md">
              Visit Our Store in the Spot on the Map Below
            </h4>
            <p className="font-p">
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>
          </div>
          <img
            src={require("../../assets/images/Huge-World-map.png")}
            alt="world-map"
          />
        </section>
        {/* Akhir Our Store */}
        {/* Sponsor */}
        <section className="container mt-5 flex-column">
          <div className="container-fave text-center">
            <h4 className="font-md font-weight-md">Our Partner</h4>
            <img src={require('../../assets/images/Partner/Sponsored.png')} alt="" />
          </div>
        </section>
        {/* Akhir Sponsor */}
        {/* Review Cust */}
        <section id="customer" className="overflow-hidden pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text">
              <h2 className="fontc-primary text-center">Loved by Thousands of Happy Customer</h2>
              <p className="sub-tittle fontc-secondary mx-auto">
                These are the stories of our customers who have visited us with
                great pleasure.
              </p>
            </div>
          </div>
          {/* row 2 */}
        </div>
        {/* carousel card */}
        <div className="container">
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={5000}>
                <div className="row">
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src={require('../../assets/images/Cust-review/christopher-campbell.jpg')} alt="" />
                        </div>
                        <div className="name">
                          <h6>Jennifer</h6>
                          <p>Jakarta</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Joan</h6>
                          <p>Bandung</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Nadia</h6>
                          <p>Surabaya</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <div className="row">
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Jennifer</h6>
                          <p>Jakarta</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Joan</h6>
                          <p>Bandung</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Nadia</h6>
                          <p>Surabaya</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <div className="row">
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Jennifer</h6>
                          <p>Jakarta</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Joan</h6>
                          <p>Bandung</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 col-lg-4 mt-3">
                    <div className="card-fav h-100 me-2 p-4">
                      <div className="profil-cust d-flex">
                        <div className="circle-human me-4 h-100 my-auto">
                          <img src="/Coffeshop/assets/img/human/human1.png" alt="" />
                        </div>
                        <div className="name">
                          <h6>Nadia</h6>
                          <p>Surabaya</p>
                        </div>
                        <div className="point ms-auto d-flex my-auto pe-3">
                          <p className="my-auto fontc-primary">4.5</p>
                          <img src="/Coffeshop/assets/img/home/star.png" alt="" className="ms-2 my-auto mt-1" />
                        </div>
                      </div>
                      <div className="text">
                        <p className="fontc-primary">
                          “Wow... I am very happy The Food is very good"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4" style={{padding: '10rem 1rem'}}>
          <div className="row h-100">
            <div className="col-6 col-sm-8 col-md-9 col-lg-10 my-auto">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="rounded-pill my-auto me-3 indicator indicator-active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} className="rounded-pill my-auto me-3 indicator indicator-active" aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} className="rounded-pill my-auto me-3 indicator indicator-active" aria-label="Slide 3" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <button className="btn-carousel-prev me-2 ms-auto" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <div className="btn-circle my-auto">
                  <img src="/Coffeshop/assets/img/direction/left.svg" alt="" />
                </div>
              </button>
              <button className="btn-carousel-next" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <div className="btn-circle my-auto">
                  <img src="/Coffeshop/assets/img/direction/white next.png" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* end carousel card */}
      </section>
       
        {/* Akhir Review Cust */}
      </main>

      <Footer />
    </>
  );
}

//export default HomePage;
