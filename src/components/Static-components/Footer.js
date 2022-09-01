import React from "react";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <footer>
        <div className="scroll-to-top">
          <div onClick={scrollToTop}>Back to top</div>
        </div>
        <div className="footer-yes">
          <div className="footer-items-1">
            <div className="footer-lists">
              <ul className="footer-list-items">
                <li className="footer-list-item-header">Get to Know Us</li>
                <li className="footer-list-item-content">About Us</li>
                <li className="footer-list-item-content">Careers</li>
                <li className="footer-list-item-content">Press Releases</li>
                <li className="footer-list-item-content">Amazon Cares</li>
                <li className="footer-list-item-content">Gift a Smile</li>
                <li className="footer-list-item-content">Amazon Science</li>
              </ul>
              <ul className="footer-list-items">
                <li className="footer-list-item-header">Connect with Us</li>
                <li className="footer-list-item-content">Facebook</li>
                <li className="footer-list-item-content">Twitter</li>
                <li className="footer-list-item-content">Instagram</li>
              </ul>
              <ul className="footer-list-items">
                <li className="footer-list-item-header">Make Money with Us</li>
                <li className="footer-list-item-content">Sell on Amazon</li>
                <li className="footer-list-item-content">
                  Sell under Amazon Accelerator
                </li>
                <li className="footer-list-item-content">
                  Amazon Global Selling
                </li>
                <li className="footer-list-item-content">
                  Become an Affiliate
                </li>
                <li className="footer-list-item-content">
                  Fulfilment by Amazon
                </li>
                <li className="footer-list-item-content">
                  Advertise Your Products
                </li>
                <li className="footer-list-item-content">
                  Amazon Pay on Merchants
                </li>
              </ul>
              <ul className="footer-list-items">
                <li className="footer-list-item-header">Let Us Help You</li>
                <li className="footer-list-item-content">
                  COVID-19 and Amazon
                </li>
                <li className="footer-list-item-content">Your Account</li>
                <li className="footer-list-item-content">Returns Centre</li>
                <li className="footer-list-item-content">
                  100% Purchase Protection
                </li>
                <li className="footer-list-item-content">
                  Amazon App Download
                </li>
                <li className="footer-list-item-content">
                  Amazon Assistant Download
                </li>
                <li className="footer-list-item-content">Help</li>
              </ul>
            </div>
          </div>
          <div className="footer-items-2">
            <span className="footer-items-item">
              <a href="/">
                <img
                  src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                  alt=""
                  className="amazon-image"
                />
              </a>
            </span>
            <ul className="footer-countries">
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Italy</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singpore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
          <div className="footer-items-3">
            <table className="footer-bottom-table">
              <tbody className="footer-items-list">
                <tr>
                  <td className="table-data">
                    <a href="/" className="main-description">
                      <span className="description-main">AbeBooks</span> <br />
                      <span className="description-text">
                        Books, art <br />& collectibles
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">
                        Amazon Web Services
                      </span>{" "}
                      <br />
                      <span className="description-text">
                        Scalable Cloud <br />
                        Computing Services
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">Audible</span> <br />
                      <span className="description-text">
                        Download <br />
                        Audio Books
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">DPReview</span> <br />
                      <span className="description-text">
                        Digital <br />
                        Photography
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">IMDb</span> <br />
                      <span className="description-text">
                        Movies, TV <br />& Celebrities
                      </span>
                    </a>
                  </td>
                </tr>
                <tr className="empty-space"></tr>
                <tr>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">Shopbop</span> <br />
                      <span className="description-text">
                        Designer <br />
                        Fashion Brands
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">Amazon Business</span>{" "}
                      <br />
                      <span className="description-text">
                        Everything For <br />
                        Your Business
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">Prime Now</span> <br />
                      <span className="description-text">
                        2-Hour Delivery <br />
                        on Everyday Items
                      </span>
                    </a>
                  </td>
                  <td className="empty-space"></td>
                  <td>
                    <a href="/" className="main-description">
                      <span className="description-main">
                        Amazon Prime Music
                      </span>{" "}
                      <br />
                      <span className="description-text">
                        90 million songs, ad-free <br />
                        Over 15 million podcasst episodes
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footer-items-4">
            <p className="item">Conditions of Use & Sale</p>
            <p className="item">Privacy Notice</p>
            <p className="item">Interest-Based Ads</p>
            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
