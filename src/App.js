import React, { useState } from "react";
import "./App.css";

function App() {
  const [check, setCheck] = useState({
    box1: false,
    box2: false,
    box3: false,
  });
  const [values, setValues] = useState({
    field1: "",
    field2: "",
    field3: "",
  });
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    const re = /^[0-9\b]+$/;
    const { name, value } = event.target;
    if (value === "" || re.test(value)) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheck({
      ...check,
      [name]: checked,
    });
  };

  const handleClickBox = (e) => {
    const checkboxValue = Object.values(check);
    const inputValues = Object.values(values);
    const tmp = [];
    let result = 0;

    for (let index = 0; index < checkboxValue.length; index++) {
      if (checkboxValue[index] === true) {
        tmp.push(inputValues[index]);
      }
    }

    if (tmp.length <= 1) {
      alert("please check minimum 2 box");
    } else {
      switch (e.target.value) {
        case "+":
          result = tmp.reduce((total, num) => {
            return parseInt(total) + parseInt(num);
          });
          setResult(result);
          break;
        case "-":
          result = tmp.reduce((total, num) => {
            return parseInt(total) - parseInt(num);
          });
          setResult(result);
          break;
        case "x":
          result = tmp.reduce((total, num) => {
            return parseInt(total) * parseInt(num);
          });
          setResult(result);
          break;
        case "/":
          result = tmp.reduce((total, num) => {
            return parseInt(total) / parseInt(num);
          });
          setResult(result);
          break;
      }
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="field1"
          value={values.field1}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="box1"
          onChange={(event) => handleCheckboxChange(event)}
        />
      </div>
      <div>
        <input
          type="text"
          name="field2"
          value={values.field2}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="box2"
          onChange={(event) => handleCheckboxChange(event)}
        />
      </div>
      <div>
        <input
          type="text"
          name="field3"
          value={values.field3}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="box3"
          onChange={(event) => handleCheckboxChange(event)}
        />
      </div>

      <div>
        <button
          style={{ marginRight: "5px" }}
          onClick={handleClickBox}
          value="+"
        >
          +
        </button>
        <button
          style={{ marginRight: "5px" }}
          onClick={handleClickBox}
          value="-"
        >
          -
        </button>
        <button
          style={{ marginRight: "5px" }}
          onClick={handleClickBox}
          value="x"
        >
          x
        </button>
        <button
          style={{ marginRight: "5px" }}
          onClick={handleClickBox}
          value="/"
        >
          /
        </button>
      </div>
      <hr />
      <div>
        <span>Hasil :</span> {result}
      </div>
    </div>
  );
}

export default App;
