import React from "react";
import { useState } from "react";

const Keypad = () => {
  const [values, setValue] = useState([]);
  const [answers, setAnswers] = useState([]);
  // const isEquals = (i) =>
  //   setValue(values.map(value, k) =>
  //   k === i
  //   ? {
  //     ...value,

  //   }

  // const [numbers, setNumbers] = useState([]);

  // const [operations, setOperation] = useState();

  return (
    <div>
      <input value={values} readOnly />
      <input value={answers} readOnly />
      <div className="wrapper">
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.value)}
          className="buttonStyler"
          value="+"
        >
          +
        </button>
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.value)}
          className="buttonStyler"
          value="-"
        >
          -
        </button>
        <button type="button" className="buttonStyler" value="*">
          &times;
        </button>
        <button type="button" className="buttonStyler" value="/">
          &divide;
        </button>
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.value)}
          // parseInt(e.target.value)
          // onClick={(e) => setValue(values + e.target.value)}
          className="buttonStyler"
          value="9"
        >
          9
        </button>
        <button type="button" className="buttonStyler" value="8">
          8
        </button>
        <button type="button" className="buttonStyler" value="7">
          7
        </button>

        <button type="button" className="buttonStyler" value="6">
          6
        </button>
        <button type="button" className="buttonStyler" value="5">
          5
        </button>
        <button type="button" className="buttonStyler" value="4">
          4
        </button>
        <button type="button" className="buttonStyler" value="3">
          3
        </button>
        <button type="button" className="buttonStyler" value="2">
          2
        </button>
        <button type="button" className="buttonStyler" value="1">
          1
        </button>

        <button type="button" className="buttonStyler" value="0">
          0
        </button>
        <button type="button" className="buttonStyler" value=".">
          .
        </button>
        <button type="button" className="buttonStyler" value="all-clear">
          AC
        </button>

        <button
          type="button"
          // onClick={() => isEquals(values)}
          className="equal-sign"
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Keypad;
