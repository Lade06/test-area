import React, { useState } from "react";
import "./calculator.css";
import Navbar from "../components/navbar";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);

  };

  const handleClear = () => {
    setInput("");
    
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

 

  return (
    <div className="cal">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4 cal_body mt-5">
            <div>
              <input
                type="text"
                placeholder="0"
                value={input}
                className="cal_input mt-5 form-control"
              onChange={handleClick}
              disabled={true}
              />
            
            </div>

            <div className="mt-3 cal_display">
              <div className="row">
                <div className="col-md-3">
                  <button
                    className="cal_button form-control"
                    onClick={() => handleClick("7")}
                  >
                    7
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    className="cal_button form-control"
                    onClick={() => handleClick("8")}
                  >
                    8
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    className="cal_button form-control"
                    onClick={() => handleClick("9")}
                  >
                    9
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    className="cal_button form-control"
                    onClick={() => handleClick("/")}
                  >
                    /
                  </button>
                </div>
              </div>
              
              <div className="row mt-2">
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("4")}
                >
                  4
                </button>
               </div>
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("5")}
                >
                  5
                </button>
               </div>
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("6")}
                >
                  6
                </button>
               </div>
                <div className="col-md-3">
                <button
                  className="cal_button form-control"
                  onClick={() => handleClick("*")}
                >
                  x
                </button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3">
                <button
                  className="cal_button form-control"
                  onClick={() => handleClick("1")}
                >
                  1
                </button>
                </div>
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("2")}
                >
                  2
                </button>
               </div>
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("3")}
                >
                  3
                </button>
               </div>
               <div className="col-md-3">
               <button
                  className="cal_button form-control"
                  onClick={() => handleClick("-")}
                >
                  -
                </button>
               </div>
              </div>
              <div className="row mt-2">
              <div className="col-md-3">
              <button
                className="cal_button form-control"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              </div>
              
              <div className="col-md-3">
              <button
                className="cal_button form-control"
                onClick={() => handleClear()}
              >
                Cl
              </button>
              </div>
             <div className="col-md-3">
             <button
                className="cal_button form-control"
                onClick={() => handleClick("+")}
              >
                +
              </button>
             </div>
             <div className="col-md-3">
             <button
                className="cal_button form-control"
                onClick={() => handleCalculate()}
              >
                =
              </button>
             </div>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
