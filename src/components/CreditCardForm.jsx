import "./CreditCardForm.css";

const CreditCardForm = () => {
  return (
    <>
      <form className="form-layout">
        <div className="text-styles cardholder-name">Cardholder Name</div>
        <input
          className="cardholder-name-input"
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <div className="text-styles card-number">Card Number</div>
        <input
          className="card-number-input"
          id="card-number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="text-styles exp-date">Exp. Date (MM/YY)</div>
        <input
          type="text"
          placeholder="MM"
          className="date-input-layout exp-date-month-input"
        />
        <input
          type="text"
          placeholder="YY"
          className="date-input-layout exp-date-year-input"
        />
        <div className="text-styles cvc">CVC</div>
        <input
          type="text"
          placeholder="e.g. 123"
          className="cvc-layout cvc-input"
        />
        <button className="confirm-button ">Confirm</button>
      </form>
    </>
  );
};

export default CreditCardForm;
