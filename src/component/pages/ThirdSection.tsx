import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ImacIMG from "../assets/images/pngwing.com.png";
import NovelIMGFirst from "../assets/images/novel-img-1.png";
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

// const ThirdBoxPicture = styled(motion.div)`
//   width: 100%;
//   height: 100vh;
//   flex-direction: column;
//   /* background-image: url(${DeskTopIMG}); */
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
//   position: absolute;
//   text-align: center;
//   z-index: 0;

// `;

const ThirdBoxText = styled(motion.li)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ThirdBoxTitle = styled(motion.p)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 1rem;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    height: 15vh;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const ThirdBoxSub = styled(motion.section)`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  font-family: "SB 어그로OTF M";
  color: #fff;

  @media (max-width: 768px) {
    height: 100%;
  }

  ul {
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);


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
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border 0.21s ease-in-out;

      &:hover {
        border: 3px solid #fff;
        opacity: 1;
      }
      
      @media (max-width: 768px) {
      width: 100%;
      height: 15vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }

      .Sn-Page {
      width: 100%;
      height: 100%;
      color: #b2b2b2;
      font-size: 2rem;
      background-color: #191919;
      font-family: "ChosunCentennial";
      transition: 1s ease-in-out ;
      cursor: pointer;

      &:hover {
        color:#fff;
        text-shadow:
          0 0 30px #000,
          0 0 60px #b23d39,
          0 0 70px #b23d39,
          0 0 90px #b23d39;
        opacity: 1;
      }
      
      @media (max-width: 768px) {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
  }
}
`;

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer; 

`;

const ModalContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 80%;
  max-height: 80%;
  background-color: #171717;
  padding: 20px;
  border-radius: 8px;
  overflow-y: auto;
  color: #fff;

  article {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .Monitor {
      width: 100%;
      height: 75%;
      background-image: url(${ImacIMG});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;

      p {
        width: 80%;
        height: 62%;
        background-image: url(${NovelIMGFirst});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        margin: 1rem auto;
      }
        }

      .MonitorTitle {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        font-family: "ChosunCentennial";

      }

      .MonitorText {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "ChosunCentennial";
        font-size: 1rem;

        p {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;
        margin-bottom: 3rem;
        }
      }

      .MonitorFooter {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "ChosunCentennial";
        font-size: 1.2rem;
        flex-direction: column;

        p {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;
        }

        div {
          width: 100%;
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin:1rem auto;

        button {
          width: 5rem;
          height: 2rem;
          border: 1px solid white;
          padding: 0.5rem auto;
          margin: 0.3rem;
          font-family: "ChosunCentennial";
          z-index: 999;
          border-radius: 50px;
          transition: 0.3s ease-in-out;

          a {
          color: #fff;
          font-weight: 900;
        }
          &:hover {
          color: #171717;
          background-color: #fff;
          opacity: 1;

          a {
            color: #171717;
          }
        }
          }
        }
      }
      }
    }
`;

const MonitorDiscriptions = [
  {
    title: (
      <p>
        레트로 게임의 장르 중 하나로 BGM과 소설을 합쳐 사운드 노벨이라 칭한다.
        <br />
        글의 내용과 어울리는 사운드를 접목하여 책을 읽듯이 BGM을 통하여
        <br />내용의 분위기를 글로만 읽는 것과 다르게 긴장감을 극대화 한다.<br />또한, 말그대로 노벨이기 때문에 기술적인 목적보단 <br />글의 내용과 사운드에 집중을 하였다. 
      </p>
    ),

    text: (
      <p>
        제작기간 : 1일 / 기여도: 100% 
      </p>
    )
  },
];

const ThirdSection = () => {

  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const animationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = {
    duration: 1,
    delay: 0.2,
  };
  const transitionSecond = {
    duration: 1,
    delay: 0.9,
  };
  const transitionText = {
    duration: 1,
    delay: 1.5,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 1200 && scrollPosition < 10000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition > 1300 && scrollPosition < 2000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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


  return (
    <Container>
      <Content>
        <ThirdBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}
        >
          <ThirdBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>HandiCraft</ThirdBoxTitle>

            <ThirdBoxSub
              variants={animationRight}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              transition={transitionText}
            >
              <ul>
                <li className="Sn-Page" onClick={openModal}>
                  <p>SOUND NOVEL</p>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </ThirdBoxSub>
        </ThirdBoxText>

        <AnimatePresence>
          {showModal && (
            <ModalBackground
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              onClick={closeModal}
            >
              <ModalContent
              variants={animationUp}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              transition={transition}>
                <article>
                  <ul>
                    <li className="Monitor">
                      <p></p>
                    </li>
                  </ul>
                    <ul>
                      <li className="MonitorTitle">SOUND NOVEL</li>
                      <ul>
                        {MonitorDiscriptions.map((item, index) => (
                        <li className="MonitorText" key={index}>
                          <p>{item.title}</p>
                        </li>
                        ))}
                      </ul>
                      <ul>
                        {MonitorDiscriptions.map((item,index) => (
                      <li className="MonitorFooter" key={index}>
                        <p>{item.text}</p>
                        <div>
                          <button>
                            <a 
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://github.com/SEIMIN-BJJ/Sound-Novel-react">Github</a>
                            </button>
                            <button>
                            <a 
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://seimin-bjj.github.io/Sound-Novel-react/">Web</a>
                            </button>
                        </div>
                      </li>
                      ))}
                      </ul>
                    </ul>
                </article>
              </ModalContent>
            </ModalBackground>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
};

export default ThirdSection;
