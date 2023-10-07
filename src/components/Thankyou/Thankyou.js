import React from "react";
import "./thankyou.css";

function Thankyou({ setConform }) {
  return (
    <div className="ThankYou">
      <div>
        <svg
          width="80"
          height="80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#a)" />
          <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
          <defs>
            <linearGradient
              id="a"
              x1="-23.014"
              y1="11.507"
              x2="0"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop offset="1" stop-color="#610595" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className="m-0">THANK YOU</h4>
        <p className="m-0">we've added your card details</p>
        <button className="continueBtn m-0" onClick={() => setConform(false)}>
          continue
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
