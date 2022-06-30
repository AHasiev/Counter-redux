import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "plus" });
  };

  const handleDecrement = () => {
    dispatch({ type: "minus" });
  };
  return (
    <div className="btn">
      <button className="Plus" onClick={handleIncrement}>
        +
      </button>

      <button className="Minus" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Button;
