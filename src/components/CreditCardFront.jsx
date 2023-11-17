const CreditCardFront = ({ formData }) => {
  const {  cardNumber, month, year,name} = formData;
  const Circlessvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.25rem"
      height="4.9375rem"
      viewBox="0 0 84 47"
      fill="none"
    >
      <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
      <path
        d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
        stroke="white"
      />
    </svg>
  );
  return (
    <>
      <div
        style={{
          minWidth: "27.9375rem",
          height: "15.3125rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(164deg, #6348FE  4.74%, #610595 88.83%)",
          borderRadius: "0.625rem",
          flexShrink: 0,
        }}
      >
        <div
          className="OvalCopy2"
          style={{
            width: "8.1875rem",
            height: "22.6875rem",
            transform: "rotate(45deg)",
            transformOrigin: "0 0",
            opacity: 0.85,
            background: "#D53AFF",
            borderRadius: "",
            filter: "blur(40px)",
            top: "-7.0625rem",
            left: "22.125rem",
            position: "absolute",
          }}
        />

        <div
          style={{
            width: "8.1875rem",
            height: "22.6875rem",
            transform: "rotate(45deg)",
            borderRadius: "22.6875rem",
            filter: "blur(40px)",
            opacity: 0.85,
            background: "#FF834A",
            left: "28.3125rem",
            top: "-7.375rem",
            position: "absolute",
            transformOrigin: "0 0",
          }}
        />

        <div
          style={{
            width: "8.1875rem",
            height: "22.6875rem",
            transform: "rotate(45deg)",
            borderRadius: "22.6875rem",
            filter: "blur(40px)",
            opacity: 0.85,
            background: "#47A2FF",
            left: "20.1875rem",
            top: "2.4375rem",
            position: "absolute",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            width: "5.25rem",
            height: "2.9375rem",
            position: "absolute",
            top: "1.75rem",
            left: "2rem",
          }}
        >
          <Circlessvg />
        </div>
        <div
          style={{
            left: "2rem",
            top: "8.6875rem",
            position: "absolute",
            color: "white",
            fontSize: "1.75rem",
            fontFamily: "Space Grotesk",
            fontWeight: "31.25rem",
            letterSpacing: "0.21388rem",
            overflowWrap: "break-word",
          }}
        >
          {cardNumber || "0000 0000 0000 0000"}
        </div>
        <div
          style={{
            top: "12.53rem",
            left: "2rem",
            position: "absolute",
            color: "var(--White, #FFF)",
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: "Space Grotesk",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: "31.25rem",
            lineHeight: "normal",
            letterSpacing: "0.125rem",
            textTransform: "uppercase",
          }}
        >
          {name || "JANE APPLESEED"}
        </div>
        <div
          style={{
            top: "12.53rem",
            left: "22.82rem",
            position: "absolute",
            color: "var(--White, #FFF)",
            textAlign: "right",
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: "Space Grotesk",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: "31.25rem",
            lineHeight: "normal",
            letterSpacing: "0.125rem",
            textTransform: "uppercase",
          }}
        >
          {month || "00"}/{year || '00'}
        </div>
      </div>
    </>
  );
};

export default CreditCardFront;
