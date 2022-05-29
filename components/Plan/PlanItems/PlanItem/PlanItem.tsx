import React from "react";

const planInfo = [
  {
    name: "Free Plan",
    features: {
      feature1: "Unlimited Bandwitch",
      feature2: "Encrypted Connection",
      feature3: "No Traffic Logs",
      feature4: "Works on All Devices",
    },
    price: "Free",
  },
  {
    name: "Standard Plan",
    features: {
      feature1: "Unlimited Bandwitch",
      feature2: "Encrypted Connection",
      feature3: "No Traffic Logs",
      feature4: "Works on All Devices",
      feature5: "Connect Anyware",
    },
    price: "$9",
  },
  {
    name: "Premium Plan",
    features: {
      feature1: "Unlimited Bandwitch",
      feature2: "Encrypted Connection",
      feature3: "No Traffic Logs",
      feature4: "Works on All Devices",
      feature5: "Connect Anyware",
      feature6: "Get New Features",
    },
    price: "$12",
  },
];

const PlanItem = () => {
  return (
    <>
      {planInfo.map((item, i) => (
          <div className="plan-item">
              <h3>{item.name}</h3>
          </div>
      ))}
    </>
  );
};

export default PlanItem;
