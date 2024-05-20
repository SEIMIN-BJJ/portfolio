import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../../App.scss"; // Ensure this path is correct relative to your file structure

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
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

const FourthBoxText = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -21vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
  }
`;

const FourthBoxTitle = styled(motion.p)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 1rem;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Pretendard-ExtraBold';
  position: relative;
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
  }
`;

const FourthBoxSub = styled(motion.p)`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  font-family: 'Pretendard-Bold';
  color: #fff;

  @media (max-width: 768px) {
    height: 50%;
  }

  ul {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    li {
      width: 100%;
      height: 100%;
      border: 1px solid #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Pretendard-Bold';

      &:hover {
        background-color: #ccc;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
    line-height: 2.3rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

interface ModalProps {
  content: string | number;
  onClose: () => void;
}

const Modal = ({ content, onClose }: ModalProps) => (
  <ModalOverlay onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose}>X</button>
      <div>{content}</div>
    </ModalContent>
  </ModalOverlay>
);

const FourthSection = () => {
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | number>("");

  const animationRight = {
    hidden: { opacity: 0, x: 0 },
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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (window.innerWidth >= 768) {
      if (scrollPosition > 2200 && scrollPosition < 4000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      if (scrollPosition > 2100 && scrollPosition < 4000) {
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

  const listItems = ["야시장 포스터", "포스터", "웹포스터", "앨범커버", "주짓수 포스터", "명함", "게임포스터", "힐링포스터"];

  const handleItemClick = (item: string | number) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Content>
        <FourthBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
          <FourthBoxTitle
            variants={animationRight}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            transition={transition}
          >
            Graphic Design
          </FourthBoxTitle>
          <FourthBoxSub
            variants={animationRight}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            transition={transitionSecond}
          >
            <ul>
              {listItems.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </FourthBoxSub>
        </FourthBoxText>
      </Content>
      {isModalOpen && (
        <Modal content={modalContent} onClose={() => setIsModalOpen(false)} />
      )}
    </Container>
  );
};

export default FourthSection;