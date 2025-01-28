import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Driving the Future of Smart Mobility</h2>
            <p>
              At Abibas Motors, we are pioneering the transition to a greener,
              smarter, and more sustainable future. Our innovative electric
              scooters are designed to offer unmatched performance, reliability,
              and style while contributing to a cleaner environment. With
              cutting-edge technology, thoughtful design, and a focus on user
              experience, Abibas Motors is redefining urban mobility, one ride
              at a time.
            </p>
            <div className="download-text__btns">
              {/* <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
