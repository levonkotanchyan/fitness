import "./wordDescription.scss";

const WordDescription = () => {
  const wordDesc = [
    {
      title: "96%",
      description: "Client Satisfaction",
      text: "Our members love their results and experience",
      color: 'text-red',
    },
    {
      title: "+5",
      description: "Years of Experience",
      text: "Trust in our proven track record of transforming",
      color: 'text-orange',
    },
    {
      title: "+800",
      description: "Active Members",
      text: "Join our thriving fitness community",
      color: 'text-red',

    },
    {
      title: "24/7", 
      description: "Support Available",
      text: "Expert assistance whenever you need it",
      color: 'text-orange',
    },
  ];

  return (
    <div className="wordDescription">
      {wordDesc.map((item, index) => (
        <div className="flex-center flex-wrap col-gap-1 w-25-p" key={index}>
          <span className={`font-36 ${item.color}`}>{item.title}</span>
          <span>{item.description}</span>
          <span className="font-12 text-gray">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default WordDescription;
