const ZindexDemo = () => {
    const dimensions = {
        width: "500px",
        height : "500px",
        position: "absolute"
    }
  return (
    <>
      <div>
        <img
          alt="img1"
          src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg"
          style={{
            left: "0px",
            top: " 0px",
            zIndex: "-1",
            ...dimensions
          }}
        />
        <img
          alt="img2"
          style={{
            left: "30px",
            top: " 30px",
            zIndex: "-2",
            ...dimensions
          }}
          src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg"
        />
         <img
          alt="img3"
          src="https://www.sixt.com/magazine/wp-content/uploads//sites/6/2022/04/Bugatti-Bolide-Hypercar-resize-1024x683.jpg"
          style={{
            left: "60px",
            top: " 60px",
            zIndex: "-3",
            ...dimensions
          }}
        />
        <img
          alt="img4"
          style={{
            left: "90px",
            top: " 90px",
            zIndex: "-4",
            ...dimensions
          }}
          src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/10-porsche-718-cayman-gt4-rs-top-10.jpg"
        />
      </div>
    </>
  );
};

export default ZindexDemo;
