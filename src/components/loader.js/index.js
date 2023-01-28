import "./style/loader.module.css";

export default function Loader() {
  return (
    <div id="preloader">
      <div id="loader">
        <div>
          <div className="loader">
            <img
              src={require('../../assets/images/gifcoffe.webp')}
              alt=""
              className="w-75 rounded-circle position-relative img-disc loader-img mt-5 mx-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
