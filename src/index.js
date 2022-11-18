//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const currentYear = new Date().getFullYear(); // returns the current year

ReactDOM.render(
  <div>
    <p className="heading">Created by Moses</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
