import React from "react";

function Success() {
  return (
    <div className="container-fluid mt-5">
      <div className="container card text-center p-4" style={{ borderRadius: "10px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}>
        <h3 className="text-success">You have logged in successfully!</h3>
      </div>
    </div>
  );
}

export default Success;
