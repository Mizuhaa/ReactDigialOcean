import React from "react";
import "./Instructions.css";
import emoji from "./emoji.svg";

const Instructions=()=> (
    <div className="instructions">
      <img alt="laughing crying emoji" src={emoji} />
      <p>Click on an emoji to view the emoji name</p>
    </div>
  );

export default Instructions;