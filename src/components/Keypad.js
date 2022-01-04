import React from "react";
import { useState } from "react";
import Field from "./Field";

const Keypad = () => {
  const [values, setValue] = useState("");
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
      <Field toDisplay={answers} readOnly />
      {console.log(values)}
      <div className="wrapper">
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.name)}
          className="buttonStyler"
          name="+"
        >
          +
        </button>
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.name)}
          className="buttonStyler"
          name="-"
        >
          -
        </button>
        <button
          type="button"
          className="buttonStyler"
          name="*"
          onClick={(e) => setValue(values + e.target.name)}
        >
          &times;
        </button>
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.name)}
          className="buttonStyler"
          name="/"
        >
          &divide;
        </button>
        <button
          type="button"
          onClick={(e) => setValue(values + e.target.name)}
          // parseInt(e.target.value)
          // onClick={(e) => setValue(values + e.target.value)}
          className="buttonStyler"
          name="9"
        >
          9
        </button>
        <button type="button" className="buttonStyler" name="8">
          8
        </button>
        <button type="button" className="buttonStyler" name="7">
          7
        </button>

        <button type="button" className="buttonStyler" name="6">
          6
        </button>
        <button type="button" className="buttonStyler" name="5">
          5
        </button>
        <button type="button" className="buttonStyler" name="4">
          4
        </button>
        <button type="button" className="buttonStyler" name="3">
          3
        </button>
        <button type="button" className="buttonStyler" name="2">
          2
        </button>
        <button type="button" className="buttonStyler" name="1">
          1
        </button>

        <button type="button" className="buttonStyler" name="0">
          0
        </button>
        <button type="button" className="buttonStyler" name=".">
          .
        </button>
        <button type="button" className="buttonStyler" name="all-clear">
          AC
        </button>

        <button
          type="button"
          onClick={() => setAnswers(eval(values))} // works currently
          className="equal-sign"
          name="="
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Keypad;
