import "./CreditCardForm.css";

const CreditCardForm = () => {
  return (
    <>
      <div className="form-layout">
        <div className="text-styles">Cardholder Name</div>
        <input id='name' type="text" placeholder="e.g. Jane Appleseed" />
        <div className="text-styles">Card Number</div>
        <input
          //className="input"
          id="card-number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div style={{color :"red", ":focus":{color:'blue'}}} >test </div>
      </div>
    </>
  );
};

export default CreditCardForm;
