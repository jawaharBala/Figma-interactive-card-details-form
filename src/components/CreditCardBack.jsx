const CreditCardBack = () => {
  const CreditCardBackRectsvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="26"
      viewBox="0 0 186 26"
      fill="none"
    >
      <rect width="115" height="4" rx="2" fill="#ADB5BE" />
      <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
      <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
      <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
      <rect
        width="115"
        height="4"
        rx="2"
        transform="matrix(-1 0 0 1 186 22)"
        fill="#ADB5BE"
      />
      <rect
        width="22"
        height="4"
        rx="2"
        transform="matrix(-1 0 0 1 65 22)"
        fill="#ADB5BE"
      />
      <rect
        width="22"
        height="4"
        rx="2"
        transform="matrix(-1 0 0 1 37 22)"
        fill="#ADB5BE"
      />
      <rect
        width="9"
        height="4"
        rx="2"
        transform="matrix(-1 0 0 1 9 22)"
        fill="#ADB5BE"
      />
      <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
      <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
      <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
      <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
    </svg>
  );
  return (
    <>
      <div
        style={{
          width: "447px",
          height: "245px",
          borderRadius: "10px",
          background: "linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "447px",
            height: "54px",
            background: "#2F2F2F",
            position: "absolute",
            top: "23px",
          }}
        />
        <div
          style={{
            width: "361px",
            height: "38px",
            background: "#ADB5BE",
            borderRadius: "4px",
            position: "absolute",
            top: "101px",
            left: "45px",
          }}
        />
        <div
          style={{
            width: "186px",
            height: "26px",
            position: "absolute",
            top: "172px",
            left: "132px",
          }}
        >
          <CreditCardBackRectsvg />
        </div>
        <div
            style={{
              textAlign: "right",
              color: "white",
              fontSize: 14,
              lineHeight:"normal",
              fontFamily: "Space Grotesk",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontFeatureSettings:"'clig',off,'liga',off",
              position:"absolute",
              top:111,
              left:358
            }}
          >
            000
          </div>
      </div>
    </>
  );
};

export default CreditCardBack;
