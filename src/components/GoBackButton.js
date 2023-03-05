import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className="btn btn-back" onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackButton;
