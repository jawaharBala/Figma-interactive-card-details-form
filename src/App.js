import "./App.css";
import CreditCardBack from "./components/CreditCardBack";
import CreditCardForm from "./components/CreditCardForm";
import CreditCardFront from "./components/CreditCardFront";

function App() {
  return (
    <div>
      <div className="left-surface">
        <div className="mask2" />
        <div className="oval1" />
        <div className="oval2" />
        <div className="oval3" />
      </div>
      <div style={{ position: "absolute", top: "11.69rem", left: "10.25rem" }}>
        <CreditCardFront />
      </div>
      <div style={{ position: "absolute", top: "29.3125rem", left: "16.125rem" }}>
        <CreditCardBack/>
      </div>
      <div style={{ position: "absolute", top: "17.9rem", left: "52rem" }}>
        <CreditCardForm />
      </div>
    </div>
  );
}

export default App;
