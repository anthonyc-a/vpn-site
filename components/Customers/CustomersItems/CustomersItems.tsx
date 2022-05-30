import React, { useEffect, useRef, useState } from "react";

const CustomersItems = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  return (
    <div className="customer-items">
      <div className="items">
        <div className="items-inner" style={{ translate: `-${20 * count}% 0` }}>
          <div className="item" ref={ref}>
            <h5>item</h5>
          </div>
          <div className="item">
            <h5>item</h5>
          </div>
          <div className="item">
            <h5>item</h5>
          </div>
          <div className="item">
            <h5>item</h5>
          </div>
          <div className="item">
            <h5>item</h5>
          </div>
        </div>
      </div>

      <div className="controls">
        <div
          className="forw"
          onClick={() => {
            count <= 2 ? setCount(count + 1) : null;
          }}
        >
          forw
        </div>
        <div
          className="back"
          onClick={() => {
            count >= 1 ? setCount(count - 1) : null;
          }}
        >
          back
        </div>
        {count}
      </div>
    </div>
  );
};

export default CustomersItems;
