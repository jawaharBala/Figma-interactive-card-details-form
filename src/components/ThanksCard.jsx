import "./ThanksCard.css";
const ThanksCard = () => {
  const DoneSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5rem"
      height="5rem"
      viewBox="0 0 80 80"
      fill="none"
    >
      <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_318)" />
      <path
        d="M28 39.9199L36.0801 48L52.0801 32"
        stroke="white"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_318"
          x1="-23.0143"
          y1="11.5071"
          x2="1.03143e-06"
          y2="91.5071"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6348FE" />
          <stop offset="1" stop-color="#610595" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <>
      <div className="container">
        <div className="doneSVG">
          <DoneSVG />
        </div>
        <p className="thanksText">THANK YOU!</p>
        <p className="cardDetails">We’ve added your card details</p>
        <button className="continueButton">Continue</button>
      </div>
    </>
  );
};

export default ThanksCard;