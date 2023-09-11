import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
    console.log(text.split(" ").length);
  };


  const handUpperCase = () => {
    setText(text.toUpperCase());
    
  };


  const handLowerCase = () => {
    setText(text.toLowerCase());
    
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>This Is Your Area</h1>
      <div className="container">
        <div className="form-floating">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={handUpperCase}>
            UpperCase
          </button>
          <button type="button" className="btn btn-primary mx-2 my-2 "onClick={handLowerCase} >
            LowerCase
          </button>-
        </div>
        <div className="container">
          <h3>Details about text</h3>
          <p>Total number of charector {text.length}</p>
          <p> Total number of words {text.split(" ").length - 1}</p>
        </div>
      </div>
    </>
  );
}
