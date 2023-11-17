import { useState } from "react";
import "./App.css";
import CreditCardBack from "./components/CreditCardBack";
import CreditCardForm from "./components/CreditCardForm";
import CreditCardFront from "./components/CreditCardFront";
import ThanksCard from "./components/ThanksCard";

function App() {
  const [formData, setFormData] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  return (
    <>
      <div className="left-surface">
        <div className="mask2" />
        <div className="oval1" />
        <div className="oval2" />
        <div className="oval3" />
      </div>
      <div className="cardFrontDiv">
        <CreditCardFront formData={formData} />
      </div>
      <div className="cardBackDiv">
        <CreditCardBack cvc={formData.cvc} />
      </div>
      <div className="formDiv">
        {formComplete ? (
          <ThanksCard />
        ) : (
          <CreditCardForm
            formData={formData}
            setFormData={setFormData}
            setFormComplete={setFormComplete}
          />
        )}
      </div>
    </>
  );
}

export default App;
