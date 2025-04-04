import Heading from "../../heading/Heading";
import WordDescription from "../wordDescription/WordDescription";
import OurServices from "../ourServices/OurServices";
import OurPlans from "../OurPlans/OurPlans";
import TrainPlans from "../trainPlans/TrainPlans";
import FitnessTools from "../fitnessTools/FitnessTools";
import Feedback from "../feedback/Feedback";
import FitnessCommunity from "../fitnessCommunity/FitnessCommunity";
import AccordionContent from "../accordionContent/AccordionContent";
import Footer from "../footer/Footer";
import man from "../../images/Frame 427.png";

import { isMobile } from "react-device-detect";

const Home = () => {
  const plans = [
    {
      plan: "PRO",
      paragraph:
        "Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!",
      l1: "Access to All Of Our Exercise Videos",
      l2: "Progress Tracking",
      l3: "Supportive Online Community",
      l4: "Advanced, Personalized Workout Plans",
      l5: "Comprehensive Nutrition Coaching",
      l6: "Access to Advanced Workout Programs",
      l7: "Body Composition Analysis",
      price: "99",
      color: "orange",
    },
    {
      plan: "CUSTOM",
      paragraph:
        "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a dedicated trainer to achieve your goals.",
      l1: "Access to All Of Our Exercise Videos",
      l2: "Progress Tracking",
      l3: "Supportive Online Community",
      l4: "Fully Customized Workout and Nutrition Plan",
      l5: "Weekly Check-ins with Your Trainer",
      l6: "Access to All Platform Features",
      l7: "Exclusive Gear Discounts",
      price: "149",
      color: "red",
    },
    {
      plan: "BEGINNER",
      paragraph:
        "Start your fitness journey with our Beginner Plan. Build a strong foundation with basic workouts and essential nutrition guidance.",
      l1: "Access to All Of Our Exercise Videos ",
      l2: "Progress Tracking",
      l3: "Supportive Online Community",
      l4: "Personalized Workout Plans",
      l5: "Basic Nutrition Guidance",
      l6: "Access to Group Fitness Classes",
      price: "49",
      color: "orange",
    },
  ];

  return (
    <div className="home">
      <Heading />
      <OurServices />
      <WordDescription />
      <OurPlans />
      <div className="flex-center justify-around trainPlanContent">
        {plans.map((item, i) => {
          return <TrainPlans item={item} key={i} />;
        })}
      </div>
      <FitnessTools type="fitness" />
      <Feedback />
      <FitnessTools type="meet" />
      {isMobile ? 
      <img src={man} alt="fit" className="blogMobile" /> : <FitnessTools type="blog" />}
      <FitnessCommunity />
       <AccordionContent/>
       <Footer/> 
    </div>
  );
};

export default Home;
