import React from "react";
import { useSelector } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";

export default function Spinner() {
  let isLoading = useSelector((state) => state.spinnerReducer.isLoading);
  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ClimbingBoxLoader size={100} color="#36d7b7" speedMultiplier={3} />
      </div>
    );
  } else {
    return <></>;
  }
}
