import "./ourServices.scss";
import lossWeigth from "../../images/lossweigth.png";
import HomeTrain from "../../images/hometrain.png";
import Gym from "../../images/gymplan.png";
import MuscleBuild from "../../images/musclebuilding.png";

const OurServices = () => {
  const data = [lossWeigth, HomeTrain, Gym, MuscleBuild];
  return (
    <div className="flex-center gap-24 flex-col p-15">
      <div className="gap-24 flex">
        <span className="text-white font-32">Our</span>
        <span className="text-red font-32">Services</span>
      </div>

      <span className="text-white font-16 flex-center">
        At This Part You Can Easily access all of our servises. take a look at
        them and chose wich ever you want.
      </span>
      <div className="serviceCards">
        {data.map((item, index) => (
          <img src={item} className="serviceCard" key={index} alt={item} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
