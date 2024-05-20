import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import NightMarket from "../assets/images/nightMarket.jpg";
import "../../App.scss"; // Ensure this path is correct relative to your file structure

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  width: 55rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

const FourthBoxText = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 21vh;

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
    height: auto;
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

    @media (max-width: 768px) {
      width: 100%;
      height: 50%;
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
  z-index: 999;
`;

const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;

  img {
    width: 100%; 
    height: auto; 
    max-width: 80%;
    max-height: 80%;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
`;

interface ModalProps {
  content: string | number;
  onClose: () => void;
}

const isString = (text: string | number): text is string => {
  return typeof text === "string";
};

const ImageTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  p {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  &:hover p {
    opacity: 1;
  }
`;

const Modal = ({ content, onClose }: ModalProps) => {

  const imageURL = isString(content) ? content : "";
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}></button>
        <img src={imageURL} onClick={onClose} alt="" />
      </ModalContent>
    </ModalOverlay>
  );
};

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
      if (scrollPosition > 2100 && scrollPosition < 10000) {
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const images = [
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
    { title: "중앙시장 야시장", src: NightMarket },
  ];

  const handleItemClick = (index: number) => {
    setModalContent(images[index].src); 
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
            Graphic Design(추가중)
          </FourthBoxTitle>
          <FourthBoxSub
            variants={animationRight}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            transition={transitionSecond}
          >
            <ul>
              {images.map((image, index) => (
                <li key={index} onClick={() => handleItemClick(index)}>
                  <ImageTitleContainer>
                    <img src={image.src} alt="" />
                    <p>{image.title}</p>
                  </ImageTitleContainer>
                </li>
              ))}
            </ul>
          </FourthBoxSub>
        </FourthBoxText>
      </Content>
      {isModalOpen && (
        <Modal content={modalContent} onClose={closeModal} />
      )}
    </Container>
  );
};

export default FourthSection;