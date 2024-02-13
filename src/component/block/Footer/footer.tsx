import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 55rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding: 20px 20px;
  left: 0;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const FooterText = styled.p`
  width: 100%;
  height: auto;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-Medium';
  color: #7a7a7a;
  line-height: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 0.9rem;
  }
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
