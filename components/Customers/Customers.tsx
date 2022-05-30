import React from "react";
import { Customers } from "../styles/Customers/Customers";
import CustomersItems from "./CustomersItems/CustomersItems";

const CustomerComponent = () => {
  return (
    <Customers>
      <div className="header">
        <h2>
          Trusted by Thousands of <br /> Happy Customer
        </h2>
        <p>
          These are the stories of our customers who have joined us with great{" "}
          <br />
          pleasure when using this crazy feature.
        </p>
      </div>
      <CustomersItems />
    </Customers>
  );
};

export default CustomerComponent;
