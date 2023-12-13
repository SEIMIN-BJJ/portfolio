import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TechIMG from "../assets/images/desktop.png";
import { motion } from "framer-motion";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import "../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Content = styled.div`
  width: 55rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

const SecondBoxPicture = styled(motion.div)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-image: url(${TechIMG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  text-align: center;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
`;

const SecondBoxText = styled(motion.li)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const SecondBoxTitle = styled(motion.p)`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3.5rem 0;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color:#fff;


  @media (max-width: 768px) {
    width: 100%;
    height: 2vh;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 auto;

  }
`;

const SecondBoxSub = styled(motion.section)`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  font-family: "SB 어그로OTF M";
  color:#fff;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:#fff;

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  }
`;

const SecondBoxHashTag = styled(motion.p)`
  width: 100%;
  height: auto;
  font-family: "SB 어그로OTF L";
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #171717a7;
  flex-direction: column;
  padding-top: 1rem;

  p {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    border-radius: 10rem;
    font-size: 0.9rem;
    color: #fff;
    padding: 0.5rem 0;
    letter-spacing: 2px;
    }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 1rem 3rem; 
  }

`;

// const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right:0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   width: 50%;
//   height: 50%;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
// `;

// const ModalCloseButton = styled.button`
//   margin-top: 1rem;
//   background-color: #ccc;
//   color: #fff;
//   border: none;
//   padding: 10px;
//   position: relative;
//   cursor: pointer;
// `;

// const ModalDescription = styled.p`
//   font-size: 16px;
//   color: #333;
// `;

const SecondSection = () => {
  const [animate, setAnimate] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  const animationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };
  const transitionSecond = {
    duration: 1,
    delay: 0.9,
  };
  const transitionHashTag = {
    duration: 1,
    delay: 1.5,
  };

  const transitionText = {
    duration: 1,
    delay: 2,
  };
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 650 && scrollPosition < 1500) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition > 450 && scrollPosition < 1200) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []); 


  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  
  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };
  return (
    <Container>
      <Content>
        <SecondBoxPicture
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        ></SecondBoxPicture>
        <SecondBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}
        >
          <SecondBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Graphic Design</SecondBoxTitle>

          <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            {/* <p onClick={handleModalOpen}>#꼼꼼함</p> */}
            <p>#특유의 꼼꼼함으로 가이드를 세워 픽셀단위로 세심하게 제작하며 통일성 있는 디자인을 제작합니다.</p>
            <p>#팀원들과의 순조로운 협동 및 의견을 반영해 더 나은 결과물을 도출하기 위해 논의하며 수긍할 줄 압니다.</p>
            <p>#레이아웃의 배치 및 그리드를 명확하게 사용함으로써 사용자가 더 편하게 볼수 있도록 노력합니다.</p>
            <p>#photoshop / illustrator를 이용하여 디자인 및 편집이 가능합니다.</p>
            <p>#XD / Figma를 이용하여 UX / UI 프로토타이핑 설계 및 디자인이 가능합니다.</p>
          </SecondBoxHashTag>

          <SecondBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
            <ul>
              <SiAdobephotoshop style={{marginRight:'1rem'}}/>
              <SiAdobeillustrator style={{marginRight:'1rem'}} />
              <SiAdobexd style={{marginRight:'1rem'}}/>
              <SiAdobepremierepro style={{marginRight: '1rem'}}/>
              <SiFigma style={{marginRight:'1rem'}} />
            </ul>
          </SecondBoxSub>
          {/* {modalOpen && (
          <ModalContainer>
            <ModalContent>
              <ModalDescription>
                - 꼼꼼함은 디자이너든 개발자든 어떤일을 하든 필수적인 것이라고 생각합니다.<br /><br />일을함에 있어서 프로세스가 있듯이 끝내고 한번 더 두번 더 검수를 하는 것이 몸에 배어있습니다.
              </ModalDescription>
              <ModalCloseButton onClick={handleModalClose}>닫기</ModalCloseButton>
            </ModalContent>
          </ModalContainer>
          )} */}


          <SecondBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Development</SecondBoxTitle>

        <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#SCSS를 이용한 컴파일링을 통하여 보다 나은 보수작업을 위해 코드를 작성하려 노력합니다.</p>
            <p>#styled-components를 이용하여 보다 빠른 마크업이 가능하며 Router를 적극 활용합니다.</p>
            <p>#Figma 및 XD의 디자인을 흡사하게 퍼블리싱 하여 웹구현을 할 수 있으며 반응형 퍼블리싱 또한 가능합니다.</p>
            <p>#웹 접근성, 웹 표준성을 고려하며 SEO의 최적화를 위해 웹 페이지를 구축합니다. </p>
            <p>#기술을 습득할때 한가지 기술에 자신감을 가질때까지 노력하지만 필요시 유연하게 기술스택에 접근할 줄 압니다. </p>
          </SecondBoxHashTag>

          <SecondBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
            <ul>
            <SiHtml5 style={{marginRight:'1rem'}}/> 
            <SiCss3 style={{marginRight:'1rem'}}/>
            <SiJavascript style={{marginRight:'1rem'}}/>
            <SiTypescript style={{marginRight:'1rem'}}/>
            <SiSass style={{marginRight:'1rem'}}/>
            <SiGithub style={{marginRight:'1rem'}}/>
            <SiReact style={{marginRight:'1rem'}}/>
            </ul>
          </SecondBoxSub>
        </SecondBoxText>
      </Content>
    </Container>
  );
};

export default SecondSection;
