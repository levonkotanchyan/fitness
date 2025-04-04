import "./ourPlans.scss";
import SwitchSelector from "react-switch-selector";

const OurPlans = () => {
  const options = [
    {
      label: <span>Mounthly</span>,
      value: {
        foo: true,
      },
      selectedBackgroundColor: "#D90A14",
    },
    {
      label: "Annauly",
      value: "Annauly",
      selectedBackgroundColor: "#CD4E17",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "Annauly"
  );
  return (
    <div className="flex-center gap-24 flex-col p-15">
      <div className="gap-24 flex">
        <span className="text-white font-32">Our</span>
        <span className="text-red font-32">Plans</span>
      </div>

      <span className="text-white font-16 flex-center">
        Select the plan that suits your fitness goals and let our expert coaches
        guide you every step of the way.
      </span>
      <div className="switchDiv">
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"transparent"}
          fontColor={"#fff"}
        />
      </div>
    </div>
  );
};

export default OurPlans;
