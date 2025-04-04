import "./feedback.scss";
import fitMan from "../../images/fitman.png";
import trainer from "../../images/EdwardTrainer.png";
import trainerJosh from "../../images/JoshTrainer.png";
const Feedback = () => {
  return (
    <div className="feedBack">
      <div className="flex-center gap-24 flex-col p-15">
        <div className="gap-24 flex">
          <span className="text-white font-32">What Our</span>
          <span className="text-red font-32">Customers Say</span>
        </div>
        <span className="text-white font-16 flex-center">
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </span>
      </div>
      <div className="OurTrainer">
        <img  className="fitMan" src={fitMan} alt="fitMan" />
        <div className="text-white feedbackBlock">
          <h2>Steven Haward</h2>
          <span className="text-gray font-14">Our Trainer</span>
          <p className="font-14">
            I’ve been using Fitmaker for the past three months, and I’m
            genuinely impressed. The website is easy to navigate, and everything
            is laid out clearly. I purchased the Premium Plan, and the
            personalized coaching has been a game-changer for me. My coach is
            incredibly supportive and always available to answer my questions.
            The weekly video sessions keep me motivated, and the custom meal
            plans have helped me stay on track with my goals. Highly recommended
            for anyone serious about their fitness journey!
          </p>
        </div>
          <img  className="trainerJosh" src={trainerJosh} alt="trainerJosh" />
          <img  className="trainerEdvard" src={trainer} alt="trainer" />
      </div>
    </div>
  );
};

export default Feedback;
