import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
// import ImacIMG from "../assets/images/pngwing.com.png";
// import iphoneIMG from "../assets/images/iphone.png";
import NovelIMGFirst from "../assets/images/novel-img-1.png";
import RockIMGFirst from "../assets/images/rock.png";
import "../../App.scss";

interface MonitorDescription {
  content: React.ReactNode;
  text: React.ReactNode;
  githubLink: string;
  webLink: string;
}

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
    height: 100vh;
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
    height: 50%;
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
      transition:  0.2s ease-in-out;


      
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
      color: #000000;
      font-size: 2rem;
      background-color: #ffffff;
      font-family: "ChosunCentennial";
      cursor: pointer;

      &:hover {
        background-color: #000000;
        text-shadow:
          0 0 30px #b23d39,
          0 0 60px #b23d39,
          0 0 70px #b23d39,
          0 0 90px #b23d39;
        opacity: 1;
        color: #b2b2b2;
        font-size: 1.8rem;
      }

      @media (max-width: 768px) {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
  }

      .Rock-Page {
      width: 100%;
      height: 100%;
      color: #000;
      font-size: 2rem;
      background-color: #fff;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      letter-spacing: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: #000;
        color: #fff;
        opacity: 1;
        font-size: 1.8rem;
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
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer; 
`;

const MonitorTitle = styled(motion.p)
<{
  soundnovel : boolean;
  rockfest : boolean;
}>`
  width: 100%;
  height: 15vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  padding: 30px 30px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  ${props =>
    props.soundnovel &&
    css`
      font-family: "ChosunCentennial";
    `}

  ${props =>
    props.rockfest &&
    css`
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      letter-spacing: 0.5rem;

    `}
`;

const ModalContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 80%;
  max-height: 80%;
  background-color: #000000e3;
  padding: 20px;
  color: #fff;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  article {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "ChosunCentennial";

      .Monitor {
      width: 100%;
      height: 100%;
      padding: 2rem 2rem ;

      @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      margin: 1rem auto;
    }

    p {

      width: 100%;
      height: 100%;
      background-image: url(${NovelIMGFirst});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center top;
      margin: 1rem auto;
      z-index: 0;
          
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: contain;
        position: relative;
        margin: 0 auto;
      
        }
      }
      }

    .MonitorText {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;

        p {
        width: 100%;
        height: 21rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px ;
        margin-bottom: 1rem;
        overflow-y: auto;
        }

        @media (max-width: 768px) {
        margin-top: 7rem;
      }
      }

      .MonitorFooter {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        flex-direction: column;

        p {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;

        @media (max-width: 768px) {
        margin-top: 5rem;
      }
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
          z-index: 999;
          border-radius: 50px;
          transition: 0.3s ease-in-out;
          color: #fff;
          font-weight: 900;

          @media (max-width: 768px) {
          margin-top: 2rem;
          font-size: 0.9rem;
          }

          a {

        }
          &:hover {
          color: #171717;
          background-color: #fff;
          opacity: 1;

        }
          }
        }
      }
      }
    }
`;


const SoundNovelContent = styled.div`
  font-family: "ChosunCentennial";
`;

const SoundNovelTextContent = styled.p`
  font-family: "ChosunCentennial";


`;

const SoundNovelTextDescription = styled.p`
  font-family: "ChosunCentennial";
`;

const RockFestaContent = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

const RockFestaTextContent = styled.p`
    font-family: 'Pretendard-Medium';
    font-size: 0.9rem;
    text-align: left;

    @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
      }
`;

const RockFestaTextDescription = styled.p`
    font-family: 'Pretendard-Medium';
    font-size: 0.9rem;
    text-align: left;
`;

const MonitorDiscriptions: Record<string, MonitorDescription>  = {
    soundnovel: {
      content: (
        <SoundNovelContent>
          <SoundNovelTextContent>
            레트로 게임의 장르 중 하나로 BGM과 소설을 합쳐 사운드 노벨이라 칭한다.<br /><br />
            글의 내용과 어울리는 사운드를 접목하여 책을 읽듯이 BGM을 통하여
            내용의 분위기를 글로만 읽는 것과 다르게 긴장감을 극대화 한다. <br /><br />
            또한, 말그대로 노벨이기 때문에 기술적인 것을 줄이고 글의 내용과 사운드에 집중을 하였다. <br /><br />
            모티브가 된 장르의 게임은 카마이타치의 밤과 제절초라는 춘소프트에서 개발한 사운드노벨의 게임을 채택하여
            좀 더 재미있게 읽을 수 있도록 제작하였다.  
       
          </SoundNovelTextContent>
      </SoundNovelContent>
      ),
      text: (
        <SoundNovelContent>
          <SoundNovelTextDescription>
          제작기간 : 2일 / 기여도: 100% 
          </SoundNovelTextDescription>
        </SoundNovelContent>
      ),
      githubLink: "https://github.com/SEIMIN-BJJ/Sound-Novel-react",
      webLink: "https://seimin-bjj.github.io/Sound-Novel-react/",
    },

    rockfest: {
      content: (
      <RockFestaContent>
        <RockFestaTextContent>
        SEIMIN 락페스티벌은 인천 펜타포트 페스티벌의 컨셉을 가져와 제작을 하였으며<br />
        본인이 좋아하는 현재 모일수가 없는 밴드들만을 모아서 제작하였다.<br /><br />밴드들의 정보 및 영상들을
        유튜브 API를 axios를 통해 영상을 담았고 동적으로 변경되는 코드로 사용하였다.<br /><br />
        여러나라의 좋은 음악들과 락페스티벌이라는 컨셉에 맞게 메탈, 락, 퓨전재즈 등 <br />한가지의 음악장르에 국한되어있지 않고
        좋은 밴드들을 홍보하기 위해 또는 <br />흔히 말하는 덕질이라는 표현으로써 이번 프로젝트를 제작하게 되었다.
        </RockFestaTextContent>
      </RockFestaContent>
    ),
    text: (
      <RockFestaContent>
        <RockFestaTextDescription>
        제작기간 : 3일 / 기여도: 100%
        </RockFestaTextDescription> 
      </RockFestaContent>
    
    ),
    githubLink: "https://github.com/SEIMIN-BJJ/Rock-Festa-react",
    webLink: "https://seimin-bjj.github.io/Rock-Festa-react/"
  },
  }

const ThirdSection = () => {

  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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

  const handleSectionClick = (section: string) => {
    if (selectedSection === section) {
      closeModal();
    } else {
      setSelectedSection(section);
      openModal();
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
              <li className="Sn-Page" onClick={() => handleSectionClick("soundnovel")}>
                <p>SOUND NOVEL</p>
              </li>
              <li className="Rock-Page" onClick={() => handleSectionClick("rockfest")}>
                <p>ROCK FESTA</p>
              </li>
                <li></li>
              </ul>
            </ThirdBoxSub>
        </ThirdBoxText>

        <AnimatePresence>
          {showModal && (
            <ModalBackground
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent
                variants={animationUp}
                initial="visible"
                animate={animate ? "visible" : "visible"}
                transition={transition}
              >
                <article>
                  <ul>
                    <div className="Monitor">
                    <p style={{ backgroundImage: `url(${selectedSection === "soundnovel" ? NovelIMGFirst : RockIMGFirst})` }}></p>
                    </div>
                  </ul>
                  <ul>
                  <MonitorTitle soundnovel={selectedSection === "soundnovel"} rockfest={selectedSection === "rockfest"}>
                    {selectedSection && selectedSection.toUpperCase()}
                  </MonitorTitle>
                    {selectedSection && MonitorDiscriptions[selectedSection] && (
                      <>
                        <ul>
                          <li className="MonitorText">
                            <p>{MonitorDiscriptions[selectedSection].content}</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="MonitorFooter">
                            <p>{MonitorDiscriptions[selectedSection].text}</p>
                              <div>
                                <button onClick={() => window.open(MonitorDiscriptions[selectedSection].githubLink, '_blank')}>
                                  Github
                                </button>
                                <button onClick={() => window.open(MonitorDiscriptions[selectedSection].webLink, '_blank')}>
                                  Web
                                </button>
                              </div>
                          </li>
                        </ul>
                      </>
                    )}
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
