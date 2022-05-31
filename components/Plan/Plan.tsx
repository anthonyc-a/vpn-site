import React from "react";
import { Plan } from "../styles/Plan/Plan";
import PlanItems from "./PlanItems/PlanItems";

const PlanComponent = () => {
  return (
    <Plan id="pricing">
      <div className="plan-header">
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and <br /> cheerfully.
        </p>
      </div>
      <PlanItems />
    </Plan>
  );
};

export default PlanComponent;
