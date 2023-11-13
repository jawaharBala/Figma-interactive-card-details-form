import { useEffect, useState } from "react";
import "./CreditCardForm.css";

const CreditCardForm = ({ formData, setFormData }) => {
  const [fieldChecked, setFieldChecked] = useState({});
  const { cardNumber, month, year, name, cvc } = fieldChecked;
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFieldChecked = (e) =>
    setFieldChecked({ ...fieldChecked, [e.target.name]: true });

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
        <label className="name-label">
          cardholder name
          <input
            className={
              !/^[a-zA-Z -]+$/.test(formData?.name) || (name && !formData.name)
                ? "input-error cardholder-name-input"
                : "cardholder-name-input"
            }
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={handleFormDataChange}
            onBlur={handleFieldChecked}
            required
          />
          {!/^[a-zA-Z -]+$/.test(formData?.name) && (
            <p className="error-info">wrong input, alphabets only</p>
          )}
          {!formData.name && name && (
            <p className="error-info">Can’t be blank</p>
          )}
        </label>
        <label className="cardNumber-label">
          card number
          <input
            className={
              (cardNumber && !formData.cardNumber) ||
              (cardNumber &&
                formData?.cardNumber &&
                !/^[0-9 ]+$/.test(+formData?.cardNumber?.replace(/\s/g, "")))
                ? "input-error card-number-input"
                : "card-number-input"
            }
            id="card-number"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleCreditCardNumber}
            onBlur={handleFieldChecked}
            maxLength={19}
            required
          />
          {cardNumber &&
            formData?.cardNumber &&
            !/^[0-9 ]+$/.test(+formData?.cardNumber?.replace(/\s/g, "")) && (
              <p className="error-info">wrong format, numbers only</p>
            )}
          {cardNumber && !formData.cardNumber && (
            <p className="error-info">Can’t be blank</p>
          )}
        </label>
        <div className="mmyy-cvc-div">
          <label className="mmyy-div">
            Exp. Date (MM/YY)
            <div className="mmyy-input">
              <input
                type="text"
                placeholder="MM"
                className={
                  month && !formData.month
                    ? "input-error mm-input"
                    : " mm-input"
                }
                name="month"
                onChange={handleFormDataChange}
                onBlur={handleFieldChecked}
                maxLength={2}
                min={1}
                max={12}
                required
              />
              <input
                type="text"
                placeholder="YY"
                className={
                  year && !formData.year ? "input-error yy-input" : " yy-input"
                }
                name="year"
                onChange={handleFormDataChange}
                onBlur={handleFieldChecked}
                maxLength={2}
                required
              />
            </div>
            {((month && !formData.month) || (year && !formData.year)) && (
              <p className="error-info">Can’t be blank</p>
            )}
          </label>
          <label className="cvc-label">
            cvc
            <input
              type="text"
              placeholder="e.g. 123"
              className={
                cvc && !formData.cvc ? "input-error cvc-input" : " cvc-input"
              }
              name="cvc"
              onChange={handleFormDataChange}
              onBlur={handleFieldChecked}
              maxLength={3}
              required
            />
            {cvc && !formData.cvc && (
              <p className="error-info">Can’t be blank</p>
            )}
          </label>
        </div>
        <button className="confirm-button">Confirm</button>
      </form>
    </>
  );
};

export default CreditCardForm;
