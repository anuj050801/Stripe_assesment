import React, { useState, useEffect } from 'react';
import plans from './plansData'; // Import the mock data

const PlanList = () => {
  const [availablePlans, setAvailablePlans] = useState([]);

  useEffect(() => {
    // Fetch plans from your backend API or use the mock data directly
    setAvailablePlans(plans);
  }, []);

  return (
    <div>
      <h2>Available Plans</h2>
      <ul>
        {availablePlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.name}</h3>
            <p>Monthly Price: {plan.monthlyPrice} INR</p>
            <p>Yearly Price: {plan.yearlyPrice} INR</p>
            <p>Video Quality: {plan.videoQuality}</p>
            <p>Resolution: {plan.resolution}</p>
            <p>Devices: {plan.devices}</p>
            <p>Number of Screens: {plan.screens}</p>
            <button onClick={() => /* Handle plan selection */}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanList;
