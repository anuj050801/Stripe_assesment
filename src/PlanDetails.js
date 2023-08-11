import React, { useState } from 'react';

const PlanDetails = ({ selectedPlan }) => {
  const [cancellationRequested, setCancellationRequested] = useState(false);

  const handleCancelPlan = async () => {
    try {
      // Send cancellation request to your backend API
      const response = await fetch('/api/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: selectedPlan.id }),
      });

      if (response.ok) {
        // Cancellation successful, set state to indicate cancellation
        setCancellationRequested(true);
      } else {
        // Handle cancellation error
      }
    } catch (error) {
      // Handle cancellation error
    }
  };

  return (
    <div>
      <h2>Selected Plan Details</h2>
      <p>Plan: {selectedPlan.name}</p>
      {/* Display other plan details */}
      {/* ... */}
      {cancellationRequested ? (
        <p>Plan cancellation requested. We're sorry to see you go.</p>
      ) : (
        <button onClick={handleCancelPlan}>Cancel Plan</button>
      )}
    </div>
  );
};

export default PlanDetails;
