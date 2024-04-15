import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

const Calculator = ({}) => {
  const [claculator, setClaculator] = useState(0);
  const [claculator2, setClaculator2] = useState(0);
  return (
    <>
      <PageContainer>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setClaculator(+e.target.value);
            }}
          />
          <br />
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setClaculator2(+e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              console.log(
                `sum: ${claculator + claculator2} minus: ${
                  claculator - claculator2
                } multipy: ${claculator * claculator2} divide:${
                  claculator / claculator2
                }`
              );
            }}
          >
            click
          </button>
          <p>sum: {claculator + claculator2}</p>
          <p>minus: {claculator - claculator2}</p>
          <p>multiply: {claculator * claculator2}</p>
          <p>
            divide:{" "}
            {claculator2 === 0
              ? "cannot divide by 0"
              : claculator / claculator2}
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export default Calculator;