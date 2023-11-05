const CreditCardBack = () => {
  const CreditCardBackRectsvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.625rem"
      height="1.625rem"
      viewBox="0 0 11.625rem 1.625rem"
      fill="none"
    >
      <rect width="7.1875rem" height="0.25rem" rx="0.125rem" fill="#ADB5BE" />
      <rect
        x="7.5625rem"
        width="1.375rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        x="9.3125rem"
        width="1.375rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        x="11.0625rem"
        width="0.5625rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        width="7.1875rem"
        height="0.25rem"
        rx="0.125rem"
        transform="matrix(-1 0 0 1 186 22)"
        fill="#ADB5BE"
      />
      <rect
        width="1.375rem"
        height="0.25rem"
        rx="0.125rem"
        transform="matrix(-1 0 0 1 65 22)"
        fill="#ADB5BE"
      />
      <rect
        width="1.375rem"
        height="0.25rem"
        rx="0.125rem"
        transform="matrix(-1 0 0 1 37 22)"
        fill="#ADB5BE"
      />
      <rect
        width="0.5625rem"
        height="0.25rem"
        rx="0.125rem"
        transform="matrix(-1 0 0 1 9 22)"
        fill="#ADB5BE"
      />
      <rect
        x="2.625rem"
        y="0.6875rem"
        width="3.75rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        x="0.875rem"
        y="0.6875rem"
        width="1.375rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        x="6.75rem"
        y="0.6875rem"
        width="2.875rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
      <rect
        x="10rem"
        y="0.6875rem"
        width="0.5625rem"
        height="0.25rem"
        rx="0.125rem"
        fill="#ADB5BE"
      />
    </svg>
  );
  return (
    <>
      <div
        style={{
          width: "27.9375rem",
          height: "15.3125rem",
          borderRadius: "0.625rem",
          background: "linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "27.937rem",
            height: "3.375rem",
            background: "#2F2F2F",
            position: "absolute",
            top: "1.44rem",
          }}
        />
        <div
          style={{
            width: "22.5625rem",
            height: "2.375rem",
            borderRadius: "0.25rem",
            background: "#ADB5BE",
            position: "absolute",
            top: "6.31rem",
            left: "2.81rem",
          }}
        />
        <div
          style={{
            width: "11.625rem",
            height: "1.625rem",
            position: "absolute",
            top: "10.75rem",
            left: "8.25rem",
          }}
        >
          <CreditCardBackRectsvg />
        </div>
        <div
          style={{
            textAlign: "right",
            color: "white",
            fontSize: "0.875rem",
            lineHeight: "normal",
            fontFamily: "Space Grotesk",
            fontWeight: "500",
            textTransform: "uppercase",
            letterSpacing: "0.125rem",
            fontFeatureSettings: "'clig',off,'liga',off",
            position: "absolute",
            top: "6.94rem",
            left: "22.38rem",
          }}
        >
          000
        </div>
      </div>
    </>
  );
};

export default CreditCardBack;
