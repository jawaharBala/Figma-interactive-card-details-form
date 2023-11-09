import "./CreditCardForm.css";

const CreditCardForm = ({ formData, setFormData }) => {
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreditCardNumber = (e) => {
    e.target.value = e.target.value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
    setFormData({ ...formData, cardNumber: e.target.value });
  };
  return (
    <>
      <form className="form-layout">
        <div className="text-styles">Cardholder Name</div>
        <input
          className="cardholder-name-input"
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={handleFormDataChange}
          required
        />

        <div className="text-styles card-number">Card Number</div>
        <input
          className="card-number-input"
          id="card-number"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleCreditCardNumber}
          maxLength={19}
          required
        />
        <div className="text-styles exp-date">Exp. Date (MM/YY)</div>
        <input
          type="text"
          placeholder="MM"
          className="date-input-layout exp-date-month-input"
          name="month"
          onChange={handleFormDataChange}
          maxLength={2}
          required
        />
        <input
          type="text"
          placeholder="YY"
          className="date-input-layout exp-date-year-input"
          name="year"
          onChange={handleFormDataChange}
          maxLength={2}
          required
        />
        <div className="text-styles cvc">CVC</div>
        <input
          type="text"
          placeholder="e.g. 123"
          className="cvc-layout cvc-input"
          name="cvc"
          onChange={handleFormDataChange}
          maxLength={3}
          required
        />
        <button className="confirm-button ">Confirm</button>
      </form>
    </>
  );
};

export default CreditCardForm;
