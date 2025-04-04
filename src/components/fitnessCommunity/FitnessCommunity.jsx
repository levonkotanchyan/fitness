import AuthBox from "../authBox/AuthBox";
import "./fitnessCommunity.scss";

const FitnessCommunity = () => {
  const supports = [
    {
      whiteText: "Personalized",
      redText: "Workout Plans",
      description:
        "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
    },
    {
      whiteText: "Personalized",
      redText: "Workout Plans",
      description:
        "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
    },
    {
      whiteText: "Personalized",
      redText: "Workout Plans",
      description:
        "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
    },
    {
      whiteText: "Personalized",
      redText: "Workout Plans",
      description:
        "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
    },
  ];
  return (
    <div className="fitnessCommunity">
      <div className="fitnessCommunityLeft">
        <div className="gap-24 flex fitComm">
          <span className="text-white font-32">Join Our</span>
          <span className="text-red font-32"> Fitness Community</span>
        </div>
        <span className=" infoTrain text-white font-14 flex-center ">
          Sign up now to unlock exclusive access to personalized workout plans,
          expert coaching, and a supportive community that will help you achieve
          your fitness goals.
        </span>
        <div className="supportBox">
          {supports.map((item, i) => {
            return (
              <div className="support" key={i}>
                <div className="supportTitle">
                  <span className="text-white font-16">{item.whiteText} </span>
                  <span className="text-red font-16">{item.redText}</span>
                </div>
                <span className="text-white font-12 flex-center">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fitnessCommunityRight">
        <AuthBox />
      </div>
    </div>
  );
};

export default FitnessCommunity;
