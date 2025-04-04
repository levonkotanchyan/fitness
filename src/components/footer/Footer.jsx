import "./footer.scss";
import footerLogo from "../../images/logo.png";
import geolocation from "../../images/Vector.svg";
import contact from "../../images/VectorOne.svg";
import footerMail from "../../images/VectorTwo.svg";
import facebook from "../../images/facebook.svg";
import instagram  from "../../images/instagram.svg";
import  twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerColumn">
        <img src={footerLogo} alt="footerLogo" />
        <p>
          Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
          With Over <span className="text-red ">5 Years</span> of Experience, We Offer Expert Coaching, Tailored
          Workout Plans, and Comprehensive Nutritional Guidance. <span className="text-orange ">Join Our
          Community</span> and Start Your Journey Towards a Healthier, Stronger You.
          Ready to Make a Change?
        </p>
        <div className="socialMedia">
          <img src={facebook} alt="facebook"/>
          <img src={instagram} alt="instagram"/>
          <img src={twitter} alt="twitter"/>
          <img src={youtube} alt="youtube"/>
        </div>
      </div>
      <div className="footerColumn">
        <span className="font-20 text-red">Company</span>
        <span>About Us</span>
        <span>Our Services</span>
        <span>Careers</span>
        <span>Blog</span>
        <span>Testimonial</span>
        <span>Contact Up</span>
      </div>
      <div className="footerColumn">
        <span className="font-20 text-red">Resources</span>
        <span>Fitness Tools</span>
        <span>Workout Videos </span>
        <span>Nutrition Guides</span>
        <span>FAQ</span>
        <span>Success Stories</span>
        <span>Membership</span>
      </div>
      <div className="footerColumn">
        <span className="font-20 text-red">Programs</span>
        <span>Weight Loss</span>
        <span>Building muscles</span>
        <span>Home Workout</span>
        <span>Gym Plan</span>
        <span>Our plans </span>
        <span>Fitness Group</span>
      </div>
      <div className="footerColumn">
        <span className="font-20 text-orange">Contact Us</span>
        <div>
          <img src={geolocation} alt="geolocation" />
          <span>Usa - Washngton DC</span>
        </div>
        <div>
          <img src={contact} alt="contact" />
          <span>1234-56789</span>
        </div>
        <div>
          <img src={footerMail} alt="footerMail" />
          <span>Fitmakerrr@Gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
