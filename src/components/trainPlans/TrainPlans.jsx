import "./trainPlans.scss";

const TrainPlans = ({ item }) => {
  return (
    <div className={`trainPlan border-${item.color}`}>
      <span className={`font-16 text-${item.color}`}>Package</span>
      <span className="font-32 paytone-one-regular">{item.plan} PLAN</span>
      <span className={`font-12 text-dark-${item.color}`}>Description</span>
      <p className=" font-14 align-justify">{item.paragraph}</p>
      <span className={`font-12 text-dark-${item.color}`}>Features</span>
      <ul className="font-14 align-left">
        <li>{item.l1}</li>
        <li>{item.l2}</li>
        <li>{item.l3}</li>
        <li>{item.l4}</li>
        <li>{item.l5}</li>
        <li>{item.l6}</li>
        <li>{item.l7 ?? ""}</li>
      </ul>
      <div className="Prise">
        <span>{item.price}$</span>
        <span className="Prise2">/USDT</span>
      </div>
      <span className={`Plans font-18 flex-center button-${item.color}`}>
        Choose This Plan
      </span>
    </div>
  );
};

export default TrainPlans;
