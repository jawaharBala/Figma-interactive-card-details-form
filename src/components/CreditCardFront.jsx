const CreditCardFront = () => {
  const Circlessvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="47"
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
          width: 447,
          height: 245,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(164deg, #6348FE  4.74%, #610595 88.83%)",
          borderRadius: 10,
          flexShrink: 0,
        }}
      >
        <div
          className="OvalCopy2"
          style={{
            width: 131,
            height: 363,
            transform: "rotate(45deg)",
            transformOrigin: "0 0",
            opacity: 0.85,
            background: "#D53AFF",
            borderRadius: 363,
            filter: "blur(40px)",
            top: '-7.0625rem',
            left: '22.125rem',
            position: "absolute",
          }}
        />

        <div
          style={{
            width: 131,
            height: 363,
            flexShrink: 0,
            transform: "rotate(45deg)",
            borderRadius: 363,
            filter: "blur(40px)",
            opacity: 0.85,
            background: "#FF834A",
            left: '28.3125rem',
            top: '-7.375rem',
            position: "absolute",
            transformOrigin: "0 0",
          }}
        />

        <div
          style={{
            width: 131,
            height: 363,
            transform: "rotate(45deg)",
            flexShrink: 0,
            borderRadius: 363,
            filter: "blur(40px)",
            opacity: 0.85,
            background: "#47A2FF",
            left: '20.1875rem',
            top: '2.4375rem',
            position: "absolute",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            width: 84,
            height: 47,
            position: "absolute",
            top: 28,
            left: 32,
          }}
        >
          <Circlessvg />
        </div>
        <div
          style={{
            left: "32px",
            top: "139px",
            position: "absolute",
            color: "white",
            fontSize: "28px",
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            letterSpacing: "3.42px",
            overflowWrap: "break-word",
          }}
        >
          0000 0000 0000 0000
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
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "0.125rem",
            textTransform: "uppercase",
          }}
        >
          JANE APPLESEED
        </div>
        <div
          style={{
            top:'12.53rem',
            left : "22.82rem",
            position:'absolute',
            color: "var(--White, #FFF)",
            textAlign: "right",
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: "Space Grotesk",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "0.125rem",
            textTransform: "uppercase",
          }}
        >
          00/00
        </div>
      </div>
    </>
  );
};

export default CreditCardFront;
