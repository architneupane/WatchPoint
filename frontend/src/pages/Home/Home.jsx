import "./Home.css";
import { Link } from 'react-router-dom';
import BannerSlider from "../../components/BannerSlider/BannerSlider.jsx";



function Home() {

  return (
  <div>
    <BannerSlider />
      <div className="new-collection">
        <div className="heading">
          <h1>NEW COLLECTION</h1>
          <p>
            Our latest colleection, where classic and contemporary styles
            coverage in <br /> perfect harmony</p>
        </div>
        <div className="nc-cards">
          <div className="nc-card">
            <img src="watch1.jpg" alt="" />
            <h4>Titan Quartz Analog</h4>
            <p>Analog Watch with Date Black Dial Metal Strap Watch for Men.</p>
            <h4>NPR 6792.00</h4>
          </div>
          <div className="nc-card">
            <img src="watch3.jpg" alt="" />
            <h4>Naviforce 8073 Nepal</h4>
            <p>The Naviforce NF8073 is a mens quartz chronograph watch that combines sporty functionality with elegant design.</p>
            <h4>NPR 3000.00</h4>
          </div>
           <div className="nc-card">
            <img src="watch2.jpg" alt="" />
            <h4>Titan Quartz Analog</h4>
            <p>Analog Watch Silver Dial Stainless Steel Strap Watch for Men.</p>
            <h4>NPR 3192.00</h4>
          </div>
        </div>
        <div className="nc-cards">
          <div className="nc-card">
            <img src="watch4.jpg" alt="" />
            <h4>Audemars Piguet Royal Oak Selfwinding</h4>
            <p>It's true classic, octagonal porthole design and thin case make it a real eye-catcher.</p>
            <h4>NPR 2550.00</h4>
          </div>
          <div className="nc-card">
            <img src="watch5.jpg" alt="" />
            <h4>Mini Focus Women Watches 0043L</h4>
            <p>Watchpoint presents you high-quality mini focus watch. This Timepiece comes with 1 years warranty and 3 days money-back guarantee.</p>
            <h4>NPR 2900.00</h4>
          </div>
          <div className="nc-card">
            <img src="watch6.jpg" alt="" />
            <h4>Skmei 9296 Silver</h4>
            <p>Stainless Steel Material and Best for Casual Looks.</p>
            <h4>NPR 2900.00</h4>
          </div>
        </div>
      </div>

      <div className="for-sport-sec">
            <img src="forsport.jpg" alt="image not found" />
            <h1>FOR SPORTS</h1>
            <p>A best selected items specificly for sporty peoples</p>
            <button>See Details</button>
      </div>

      <div className="categories">
        <div className="category-card">
            <div className="category-image">
                <img src="mencat.jpg" alt="" />
            </div>
           <div className="category-detail">
            <span  className="category-heading">MAN</span><br />
            <button><Link to="/men">See Details</Link></button>
           </div>
        </div>
        <div className="category-card">
            <div className="category-image">
                <img src="womencat.jpg" alt="" />
            </div>
           <div className="category-detail">
            <span className="category-heading">WOMAN</span><br />
            <button><Link to="/women">See Details</Link></button>
           </div>
        </div>
        <div className="category-card">
            <div className="category-image">
                <img src="kidscat.jpg" alt="" />
            </div>
           <div className="category-detail">
            <span className="category-heading">KIDS</span><br />
            <button><Link to="/kids">See Details</Link></button>
           </div>
        </div>
      </div>
    <div className="last-part">
      <div className="email-form">
        <h1  style={{ fontFamily: 'Tektur, sans-serif' }} >WATCHPOINT</h1>
        <span>Get newsletter updates for upcoming product <br /> and best discount for all items </span>
        <div className="input-box">
        <input type="email" name="email" placeholder="Your Email"  />
        <button>Submit</button>
        </div>
      </div>

      <div className="navigate-links">
        <table>
          <thead>
            <tr>
                <th>Product</th>
                <th>Categories</th>
                <th>Our Social Media</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Classic Watches</td>
                <td><Link to='/men'>Men</Link></td>
                <td>Instagram</td>
            </tr>
            <tr>
                <td>Sport Watches</td>
                <td><Link to='/women'>Women</Link></td>
                <td>Facebook</td>
            </tr>
            <tr>
                <td>Golden Watches</td>
                <td><Link to='/kids'>Kids</Link></td>
                <td>Tiktok</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>Youtube</td>
            </tr>
            </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default Home;
