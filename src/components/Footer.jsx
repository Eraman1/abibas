import Logo from "../images/logo/abibas.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li className="footer_logo">
                <img src={Logo} alt="logo-img" />
              </li>
              <li>
                <span>Abibas Motors India Pvt. Ltd</span>
              </li>
              <li>Redefining the way you move-smarter, cleaner and faster.</li>
              <li>
                <i className="fa fa-location-dot"></i> &nbsp; No. 235, 13th
                Cross, 2nd floor,Indiranagar Bangalore North, Karnataka, India -
                560038
              </li>
              <li>
                <a href="tel:918123254305">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91-8123254305
                </a>
              </li>
              <li>
                <a href="mailto:contact@abibasmotors.com">
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; contact@abibasmotors.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Know more</li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/models">Models</a>
              </li>
              <li>
                <a href="/refund">Refund Policy</a>
              </li>
              <li>
                <a href="/privacyPolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/term&condition">Term and condition</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Regional Office</li>
              <li>Mysore</li>
              <li>Kalaburagi</li>
              <li>Sathyavedu</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
              <li className="social-icons">
                <small>follow :</small>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-x"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Abibas Motors India Pvt. Ltd. All
            rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://aadishritechnologies.com"
              target="_blank"
              rel="noreferrer"
            >
              Aadishri Technologies
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
