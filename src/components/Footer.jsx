import Logo from "../images/logo/abibas.jpg";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li className="navbar__img">
                <img src={Logo} alt="logo-img" />
              </li>
              <li>
                <span>Abibas Motors India Pvt. Ltd</span>
              </li>
              <li>Redefining the way you move-smarter, cleaner and faster.</li>
              <li>
                <i className="fa fa-location"></i> &nbsp; No. 235, 13th Cross,
                2nd floor,Indiranagar Bangalore North, Karnataka, India - 560038
              </li>
              <li>
                <a href="tel:918123254305">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91-8123254305
                </a>
              </li>
              <li>
                <a
                  href="mailto: 
                contact@abibasmotors.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; contact@abibasmotors.com
                </a>
              </li>
              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://aadishritechnologies.com"
                >
                  Design with Aadishri Technologies
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Know more</li>
              <li>
                <a href="#home">Gallery</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
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
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
