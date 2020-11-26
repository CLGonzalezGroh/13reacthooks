import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";
import { useHistory } from "react-router-dom";

import AppContext from "../context/AppContext";

import "../styles/components/Payment.css";

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
    clientId:
      "AbAqhhRb-iqJSnaambtbgYyia-0xHlwzfh_ZKe1I2I0efpZM4Q7MYICk3npyhHuFvXvIGnxSK15hCb2p",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyle = {
    layout: "vertical",
    shape: "rect",
  };
  const history = useHistory();

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  const handleSum = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-container">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          Boton de pago
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyle}
            amount={handleSum()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
