import "./heading.scss";
import muscleGuy from "../images/muscleGuy.png";
const Heading = () => {
  return (
    <div className="heading">
      <div className="headingLeft">
        <span className="medium-text">Achieve Your</span>
        <span className="gradient-text">FITNESS GOALS</span>
        <span className="medium-text">With FitMaker</span>
        <p>
          "Join the FitMaker community and transform your fitness journey. Our
          expert coaches and personalized programs are designed to help you
          achieve your goals and exceed your expectations. Ready to make a
          change?"
        </p>
        <div className="flex-row">
          <button className="log-btn w-48-p">
          Start Your Journey
          </button>
          <button className="sign-btn w-48-p">
          Explore Programs
          </button>
        </div>
      </div>
      <img src={muscleGuy} alt="muscleGuy" />
    </div>
  );
};

export default Heading;
