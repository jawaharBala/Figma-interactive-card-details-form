import { useState } from "react";
import "./CreditCardForm.css";

const CreditCardForm = ({ formData, setFormData, setFormComplete }) => {
  const [fieldTouched, setFieldTouched] = useState({});
  const {
    cardNumberTouched,
    monthTouched,
    yearTouched,
    nameTouched,
    cvcTouched,
  } = fieldTouched;
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFieldTouched = (e) => {
    setFieldTouched({ ...fieldTouched, [e.target.name + "Touched"]: true });
    validateForm();
  };

  const handleCreditCardNumber = (e) => {
    e.target.value = e.target.value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
    setFormData({ ...formData, cardNumber: e.target.value });
  };
  const nameInputFormatValidation =
    formData?.name?.length > 0 && !/^[a-zA-Z -]+$/.test(formData?.name);
  const nameInputBlankValidation = nameTouched && !formData.name;
  const cardNumberInputFormatValidation =
    formData?.cardNumber?.length > 0 &&
    !/^[0-9 ]+$/.test(+formData?.cardNumber?.replace(/\s/g, ""));
  const cardNumberInputBlankValidation =
    cardNumberTouched && !formData.cardNumber;
  const monthInputValidation = monthTouched && !formData.month;
  const yearInputValidation = yearTouched && !formData.year;
  const cvcInputValidation = cvcTouched && !formData.cvc;
  const validateForm = () => {
    let formValid = false;
    console.log(
      nameInputBlankValidation,
      cardNumberInputBlankValidation,
      monthInputValidation,
      yearInputValidation,
      nameInputFormatValidation,
      cardNumberInputFormatValidation
    );
    if (!nameInputFormatValidation && !cardNumberInputFormatValidation) {
      if (
        !(
          nameInputBlankValidation &&
          cardNumberInputBlankValidation &&
          monthInputValidation &&
          yearInputValidation &&
          cvcInputValidation
        )
      ) {
        formValid = true;
      }
    }
    setFormComplete(formValid);
    console.log(formValid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };
  return (
    <>
      <form className="form-layout">
        <label className="name-label">
          cardholder name
          <input
            className={
              nameInputFormatValidation || nameInputBlankValidation
                ? "input-error cardholder-name-input"
                : "cardholder-name-input"
            }
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={handleFormDataChange}
            onBlur={handleFieldTouched}
            required
          />
          {nameInputFormatValidation && (
            <p className="error-info">wrong input, alphabets only</p>
          )}
          {nameInputBlankValidation && (
            <p className="error-info">Can’t be blank</p>
          )}
        </label>
        <label className="cardNumber-label">
          card number
          <input
            className={
              cardNumberInputBlankValidation || cardNumberInputFormatValidation
                ? "input-error card-number-input"
                : "card-number-input"
            }
            id="card-number"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleCreditCardNumber}
            onBlur={handleFieldTouched}
            maxLength={19}
            required
          />
          {cardNumberInputFormatValidation && (
            <p className="error-info">wrong format, numbers only</p>
          )}
          {cardNumberInputBlankValidation && (
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
                  monthInputValidation ? "input-error mm-input" : " mm-input"
                }
                name="month"
                onChange={handleFormDataChange}
                onBlur={handleFieldTouched}
                maxLength={2}
                min={1}
                max={12}
                required
              />
              <input
                type="text"
                placeholder="YY"
                className={
                  yearInputValidation ? "input-error yy-input" : " yy-input"
                }
                name="year"
                onChange={handleFormDataChange}
                onBlur={handleFieldTouched}
                maxLength={2}
                required
              />
            </div>
            {(monthInputValidation || yearInputValidation) && (
              <p className="error-info">Can’t be blank</p>
            )}
          </label>
          <label className="cvc-label">
            cvc
            <input
              type="text"
              placeholder="e.g. 123"
              className={
                cvcInputValidation ? "input-error cvc-input" : " cvc-input"
              }
              name="cvc"
              onChange={handleFormDataChange}
              onBlur={handleFieldTouched}
              maxLength={3}
              required
            />
            {cvcInputValidation && <p className="error-info">Can’t be blank</p>}
          </label>
        </div>
        <button onClick={handleSubmit} className="confirm-button">
          Confirm
        </button>
      </form>
    </>
  );
};

export default CreditCardForm;
