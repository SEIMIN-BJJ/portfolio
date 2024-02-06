import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/cloud.json";

const CloudAniMation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default CloudAniMation;
