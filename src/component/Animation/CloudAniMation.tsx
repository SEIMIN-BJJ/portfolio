import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/cloud.json";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

`;

const CloudAniMation = () => {
  return (
    <Container>
      <Lottie animationData={animationData} loop autoplay />
    </Container>
  );
};

export default CloudAniMation;
