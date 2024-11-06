import React, { useState } from 'react';
import './payment.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }
    // Handle payment based on the selected method
    alert(`Proceeding with ${selectedMethod} payment...`);
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <div 
          className={`payment-option ${selectedMethod === 'razorpay' ? 'selected' : ''}`} 
          onClick={() => setSelectedMethod('razorpay')}
        >
          <span className="payment-symbol">💳</span>
          <span>Pay with Razorpay</span>
        </div>

        <div 
          className={`payment-option ${selectedMethod === 'gpay' ? 'selected' : ''}`} 
          onClick={() => setSelectedMethod('gpay')}
        >
          <span className="payment-symbol">📱</span>
          <span>Pay with Google Pay (UPI)</span>
        </div>

        <div 
          className={`payment-option ${selectedMethod === 'upi' ? 'selected' : ''}`} 
          onClick={() => setSelectedMethod('upi')}
        >
          <span className="payment-symbol">💸</span>
          <span>Pay with UPI</span>
        </div>
      </div>
      
      <button className="pay-button" onClick={handlePayment}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentPage;
