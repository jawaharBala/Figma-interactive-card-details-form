import "./CreditCardForm.css";

const CreditCardForm = ({formData,setFormData}) => {
const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const formatNumber = (number) => {const formattedCardNumber =number?.trim().split("").map((e,i)=>{
    console.log(number,e,i)
    if((i+1)%4 === 0){
      return e + " "
    }else return e
  }).join("");
  setFormData({...formData,cardNumber:formattedCardNumber})
};
const handleCreditCardNumber = (e) =>{
    formatNumber(e.target.value)
}
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
         // type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleCreditCardNumber}
          value={formData?.cardNumber || ""}
          maxLength={16}
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
