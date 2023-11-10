import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FooterText = styled.p`
  width: 100%;
  height: 100%;
  font-size: 15px;
  border: 1px solid black;
  margin: 0 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footer = () => {
  return (
    <Footer>
      <FooterText>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        <br />
        ©2023 Lim Sung Min. All Rights Reserved.
      </FooterText>
    </Footer>
  );
};

export default footer;
