import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Billing = () => {
  const history = useHistory();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  });

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = async () => {
    try {
      // Send payment data to your backend API and create a subscription
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPlan, creditCardInfo }),
      });

      if (response.ok) {
        // Subscription created successfully, redirect to confirmation page
        history.push('/confirmation');
      } else {
        // Handle payment error
      }
    } catch (error) {
      // Handle payment error
    }
  };

  return (
    <div>
      <h2>Select a Plan</h2>
      {/* Display plan options */}
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.name}</h3>
            {/* Display plan details */}
            {/* ... */}
            <button onClick={() => handlePlanSelection(plan)}>Select</button>
          </li>
        ))}
      </ul>

      {/* Payment form */}
      {selectedPlan && (
        <div>
          <h2>Payment Information</h2>
          <input
            type="text"
            placeholder="Card Number"
            value={creditCardInfo.cardNumber}
            onChange={(e) =>
              setCreditCardInfo({ ...creditCardInfo, cardNumber: e.target.value })
            }
          />
          {/* Other card info inputs */}
          {/* ... */}
          <button onClick={handlePayment}>Buy Plan</button>
        </div>
      )}
    </div>
  );
};

export default Billing;
