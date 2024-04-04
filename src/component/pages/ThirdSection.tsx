import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import NovelIMGFirst from "../assets/images/novel-img-1.png";
import RockIMGFirst from "../assets/images/rock.png";
import GameIMGFirst from "../assets/images/game.png";
import { useNavigate } from 'react-router-dom';
import "../../App.scss";

interface MonitorDescription {
  content: React.ReactNode;
  text: React.ReactNode;
  githubLink: string;
  webLink: string;
  route: string;
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

const ThirdBoxText = styled(motion.div)`
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
  font-family: 'Pretendard-ExtraBold';
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
  font-family: 'Pretendard-Bold';
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
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition:  0.2s ease-in-out;

      @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      }
    }

      .Sn-Page {
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 2rem;
      background-color: #000;
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
        color: #ccc;
        font-size: 1.8rem;
        z-index: 2;
      }

      @media (max-width: 768px) {
      width: 90%;
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: #000000;
        text-shadow:
          0 0 30px #b23d39,
          0 0 60px #b23d39,
          0 0 70px #b23d39,
          0 0 90px #b23d39;
        opacity: 1;
        color: #ccc;
      }
  }

      .Rock-Page {
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 2rem;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      letter-spacing: 0.5rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      .RockFestaText {
      width: 80%;
      height: 20rem;
      position: absolute;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

      video {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        position: relative;
        z-index: 1;

      }

      &:hover {
        opacity: 1;
        font-size: 1.8rem;
    }

      @media (max-width: 768px) {
      width: 90%;
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      }
    }

    .Game-Page {
      width: 100%;
      height: 100%;
      color: yellow;
      font-size: 1.2rem;
      font-family: "PressStart2P-Regular";
      letter-spacing: 0.5rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      text-align: center;

      .GameInfoText {
      width: 80%;
      height: 20rem;
      position: absolute;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;

    }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: 1;

      }

      &:hover {
        color: yellow;
        opacity: 1;
        font-size: 1.1rem;
        text-shadow: 
          -1px 0px #bababa, 
            0px 1px #bababa, 
            1px 0px #bababa, 
            0px -1px #bababa;
    }

      @media (max-width: 768px) {
      width: 90%;
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      text-shadow: 
          -1px 0px #bababa, 
            0px 1px #bababa, 
            1px 0px #bababa, 
            0px -1px #bababa;
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
  z-index: 2;
  cursor: pointer; 
`;

const MonitorTitle = styled(motion.p)
<{
  soundnovel : boolean;
  rockfest : boolean;
  gameinfo : boolean;
}>`
  width: 100%;
  height: 15vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 1rem;
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

    ${props =>
    props.gameinfo &&
    css`
      font-family: "PressStart2P-Regular";
      letter-spacing: 0.5rem;
      font-size: 1.6rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

    @media (max-width: 390px) {

      height: auto;
      margin-bottom: -8rem;

    }

    @media (max-width: 430px) {

      height: 70%;
    }

    @media (max-width: 375px) {

      height: 35%;
      margin-bottom: -14rem;
    }

  ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .Monitor {
      width: 100%;
      height: 100%;
      padding: 2rem 2rem ;

      @media (max-width: 768px) {
      width: 100%;
      height: 50%;
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
        width: 70%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: contain;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin-top: 5rem;
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
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-bottom: 1rem;

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
        @media (max-width: 768px) {
        height: 0;
        margin: 4rem auto;

      }

        /* p {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;

        @media (max-width: 768px) {
        height: 2rem;
          }
        } */

        div {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;

          .developBtn {
          font-size: 0.7rem;
          }

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
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          align-items: center;
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
  text-align: left;
  font-size: 1.3rem;
  height: 29rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {

    height: 25rem;
  }

  @media (max-width: 414px) {

    height: 20rem;
  }

  @media (max-width: 430px) {

    height: 28rem;
  }

  @media (max-width: 375px) {

    height: 21rem;
    margin-top: 3rem;
  }
`;

const SoundNovelTextContent = styled.p`
  font-family: "ChosunCentennial";
  line-height: 1.7rem;
`;


const RockFestaContent = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: left;
  font-size: 1.3rem;
  height: 29rem;
  overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {

height: 25rem;
}

@media (max-width: 414px) {

height: 20rem;
}

@media (max-width: 430px) {

height: 28rem;
}

@media (max-width: 375px) {

height: 21rem;
margin-top: 3rem;
}
`;

const RockFestaTextContent = styled.p`
    font-family: 'Pretendard-Medium';
    line-height: 1.7rem;
`;

const GameInfoContent = styled.div`
  font-family: "PressStart2P-Regular";
  text-align: left;
  font-size: 1.3rem;
  height: 29rem;
  overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {

height: 25rem;
}

@media (max-width: 414px) {

height: 20rem;
}

@media (max-width: 430px) {

height: 28rem;
}

@media (max-width: 375px) {

height: 21rem;
margin-top: 3rem;
}
`;

const GameInfoTextContent = styled.p`
    font-family: 'Pretendard-Medium';
    line-height: 2rem;

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
            좀 더 재미있게 읽을 수 있도록 제작하였다.<br /><br />
            지인의 삶의 내용을 전반적으로 담았고 서로 얘기하면서 책으로 낼 수는 없어도
            웹으로 만들 수 있지는 않을까 생각하면서 얘기하면서 글을 썼다.<br /><br />
            혼자 제작을 한 것이 아닌 지인과 서로 울고 웃으면서 재밌게 제작을 하였고
            이런 것이 순기능이 아닐까 하는 생각을 많이 하며 임하였다.<br /><br />
            처음의 제작의도는 밀리의 서재 등 책플랫폼을 컨셉으로 하여 제작을 할까 하였지만
            내용이 무겁고 더군다나 책플랫폼은 혼자의 힘으로 하기도 힘들고<br />또한 반복적인 부분이 많다보니
            글로만 읽기에는 너무 심심한 면이 있다 싶어 생소한 사운드 노벨이라는 장르를 채택하였다.<br /><br />
            내용의 전개는 이러하다.<br /><br />
            지인의 유년기 시절부터 현재에 이르기까지의 삶의 전반을 내용에 담았고<br />
            해당 내용의 당사자 요청사항 중에는 세상엔 눈으로 보고도 믿을 수 없는 일이<br />많이 일어나고 있고 
            그것이 누군가가 정해져있는 것이 아닌 남녀노소 불문하여 누구도 이런일이 일어날 수도 있으며<br /><br />
            선한마음을 가지고 살고 지내다보면 나쁜 것들은 올 수 없으며
            인간이라는 존재는 마음먹기에 달리고 결과도 마음먹기에 달라진다라는 말과 함께
            세상에 없는 존재들이 악영향을 끼칠 수 없는 힘을 가지고 있다는 것을 알리고 싶었다고 한다.<br /><br />
            또한, 각박한 세상을 살아가면서 보이지 않는 존재들이 도와주고 있다라는 것을<br />
            필시 강조함이 있었다.<br /><br />
            본인도 지인과 같이 놀고 친구로써 지내보면서 여러 현상들을 직접 눈으로 보고 몸소 체험하면서
            정말로 세상에는 보이지 않는 무언가가 있다라는 것으로 생각이 바뀐 계기들이 많이 있다.<br /><br />
            본인은 초자연적인 현상은 믿지 않는 사람이였음에도 불구하고 이 친구와 어릴적부터 지내오면서 
            신기한 경험들을 많이 한 부분이 있다.<br />그리하여 본인의 가치관이 변한 부분이 있고
            더군다나 본인이 직접 겪었다보니 무조건적으로 무시할 수는 없겠다라는 생각을 많이 하게 되었다.<br /><br />
            미지의 세계를 알려주기 위해서 라고 하기보단 지독하게 힘들게 살았던 친구의 자서전이라도 만들면 어떨까라는 생각에
            제작한 것이 더 크다라고 할 수 있겠다.
          </SoundNovelTextContent>
      </SoundNovelContent>
      ),
      text: (
        <SoundNovelContent>
          {/* <SoundNovelTextDescription>
          제작기간 : 23.12.1 ~ 12.3 / 기여도: 100% 
          </SoundNovelTextDescription> */}
        </SoundNovelContent>
      ),
      githubLink: "https://github.com/SEIMIN-BJJ/Sound-Novel-react",
      webLink: "https://seimin-bjj.github.io/Sound-Novel-react/",
      route: '/sn-develop',
    },

    rockfest: {
      content: (
      <RockFestaContent>
        <RockFestaTextContent>
        SEIMIN 락페스티벌은 인천 펜타포트 페스티벌의 컨셉을 가져와 제작을 하였으며
        본인이 좋아하는 현재 모일수가 없는 밴드들만을 모아서 제작하였다.<br /><br />
        현재 제작된 음악의 장르는 트랜스코어, 뉴메탈, 재즈, 하드코어 재즈, FunkRock 등등의 장르로 발탁하였으며<br />
        여러나라의 좋은 음악들과 락페스티벌이라는 컨셉에 맞게 메탈, 락, 퓨전재즈 등 한가지의 음악장르에 국한되어있지 않고
        좋은 밴드들을 홍보하기 위해 또는 흔히 말하는 덕질이라는 표현으로써 이번 프로젝트를 제작하게 되었다.<br /><br />
        본인은 음악을 매우 좋아하다보니 매년 락페스티벌을 갔었으나 현재는 갈 수가 없는 현실에 매우 절망을 한 적이 많았다.<br /><br />
        예전에 락이 성황하던 시절인 2006년부터 2010년까지의 그 좋았던 시절을 잊지 못하여 예전에 듣는 음악들을 주로 듣는 편이다.<br />
        사실 요새 나오는 락이나 음악들은 잘 알지 못하여 예전 음악만 듣는 이유도 있긴하다.<br />한가지 더 이유가 있다면 무언가가 빠진 느낌이 많다.<br /><br />
        참으로 건방진 소리가 아닐 수 없지만 현재 40대 및 30대들이 되어버린 (물론 본인도 포함이다.) 삶의 지친 나이가 되어버린 락팬들이라면 이해가 될 것이라고 감히 말을 해본다.<br /><br />
        본인은 좋아하는 특정 밴드들이나 아티스트들이 실제로 락페스티벌에 모여 공연을 하는 모습을 봤으면 좋겠다는 바램이 한구석에 항상 있었다.<br /><br />
        하지만 현재 본인이 제작한 라인업을 보면 일본에서는 가능은 할 수는 있으나 세월이 많이 지났다보니 그런 꿈같은 일은 일어나지 않을 것이라는 여론이 우세적이다.<br /><br />
        참으로 안타까운 일이 아닐 수 없다.<br /><br />
        그래서 본인이 직접 만들기로 하였고 요새는 유튜브나 spotfy, apple music 등등 많은 플랫폼들이 등장하면서
        원한다면 언제든지 실시간으로 듣고 보고 하면서 바쁘다 바빠의 현실을 음악으로써 느끼고 있는 중이다.<br /><br />
        테이프를 모으던 시절, CD를 모으던 시절, MP3를 모으던 시절은 이제 온데간데 없고<br />내가 지내왔던 낭만이 있던 그 시절은 이미 지나갔다는 것에
        허탈감을 느끼고 있던 와중에<br />그러면 그 플랫폼을 이용하여 원하는 아티스트들만을 모아서 볼 수 있지 않을까라는 생각에 제작을 하였다.<br /><br />
        정말 순전히 본인이 보고 싶어 만든 웹페이지라고 볼 수 있겠다.
      
        </RockFestaTextContent>
      </RockFestaContent>
    ),
    text: (
      <RockFestaContent>
        {/* <RockFestaTextDescription>
        제작기간 : 2024.1 ~ 1. / 기여도: 100%
        </RockFestaTextDescription>  */}
      </RockFestaContent>
    
    ),
    githubLink: "https://github.com/SEIMIN-BJJ/Rock-Festa-react",
    webLink: "https://seimin-bjj.github.io/Rock-Festa-react/",
    route: '/rock-develop',
  },

  gameinfo: {
    content: (
    <GameInfoContent>
      <GameInfoTextContent>
        본인은 PC게임보다는 콘솔게임을 너무 좋아한다.<br />
        그러다보니 레트로 게임들 및 기기들이 집에 즐비해 있으며<br />
        예전 게임 패키지들도 그대로 있는 상태이다.머리를 쉴 때 마저 게임으로 머리를 쉬니 얼마나 게임을 좋아하는지 집이 게임방이 되버렸다.<br /><br />
        생각해보면 어릴 적 영향이 큰 듯한데 집이 그렇게 부유한편이 <br />아니다 보니 컴퓨터는 커녕 8비트 게임기만 있고 
        어쩌다가 게임보이를 갖게되서 너무 좋아했던 기억이 있다.<br />
        그런 파동으로 인해서 나이먹고 게임에 집착하게 됐는지도 모른다.<br /><br />
        요새는 플스, 엑스박스, 스위치 등등 많은 게임들이 쏟아져나오고 콘솔들이 나왔지만
        그래도 가끔 레트로 게임이 생각나서 할 때가 종종 있다.<br />그만큼 생각안하기 좋은게 레트로게임만 한것도 없다.<br /><br />
        아, 물론 현세대기도 전부 보유중이긴 하다.<br /><br />
        요새는 많은 게임들이 있다보니 나오면 전부 해보고 괜찮은 AAA게임들만 모아놓고 있기도 하다.<br />
        이 토이 프로젝트도 많은 게임들을 소개하려다보니 API양이 너무 많다.<br /><br />
        그래서 플랫폼과 장르만을 소개하는 것으로 토이 프로젝트를 만들었다.<br />
        한달에 한번씩만 사용할 수 있는 한정 소스만 있다보니 구현하려면 돈이 꽤 들어가는 부분이다.<br />그래서 트레일러 구현까지는 무리여서 소개까지만 하는 작은 웹사이트를 구현했다.
        <br /><br />게임 정보들이 많이 있는 API이다 보니 모르는 게임들을 알게 된 것도 나름 좋은 부분이 있었다.<br />
        하지만 어느 부분에서는 아무리 현존하는 현세대기 게임을 하고 레트로 게임을 하고 있어도 어릴적 감성을 느끼기는 많이 어렵다.<br /><br />
        어릴 때만 해도 게임이 영어든 일어든 무슨 소린지도 모르면서 끝판왕까지 깼던걸 보면 참 어지간히도 좋아했고 순수했구나라는 생각이 들었다.<br />
        하지만 지금은 공략집을 보기도 힘들고 영어를 읽든 일어를 읽든 어떻게든 읽을 수는 있겠지만 이제는 한글이 아니면 귀찮고 힘들다.<br /><br />
        지금의 게임들도 참 좋고 편해졌지만 예전의 감성을 가질 수 있는 게임기들도 더 들여놓고 싶다는 마음이 크다.<br />
        하지만 그런 기기를 들여놓는다고 해서 어릴적 느껴봤을 그 두근거림이 과연 있을까 싶기도 하다.<br /><br />
        여러모로 욕심도 나지만 허탈하기도 하고 그립기도 한 그런 프로젝트이다.

      </GameInfoTextContent>
    </GameInfoContent>
  ),
  text: (
    <GameInfoContent>
      {/* <RockFestaTextDescription>
      제작기간 : 2024.1 ~ 1. / 기여도: 100%
      </RockFestaTextDescription>  */}
    </GameInfoContent>
  
  ),
  githubLink: "https://github.com/SEIMIN-BJJ/Game_Info_react",
  webLink: "https://seimin-bjj.github.io/Game_Info_react/",
  route: '/gameinfo-develop',
},
  }

const ThirdSection = () => {

  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  // const [hovered, setHovered] = useState(false);
  // const [gameHovered, setGameHovered] = useState(false);
  const navigate = useNavigate();

  const animationLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const animationUp = {
    hidden: { opacity: 0, y: 0 },
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
      if (scrollPosition > 1500 && scrollPosition < 2500) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition >1500 && scrollPosition < 3000) {
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
    setSelectedSection(null);
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

  useEffect(() => {
    if (showModal) {
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
  }, [showModal]);

  return (
    <>
    <Container id="ThirdSection">
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
              <li
                className="Rock-Page"
                onClick={() => handleSectionClick("rockfest")}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
              >
                <p className="RockFestaText">ROCK FESTA</p>
                  <video autoPlay loop muted playsInline >
                    <source src={process.env.PUBLIC_URL + "/videos/fire.mp4"} type="video/mp4" />
                  </video>
              </li>
                {/* <p className="RockFestaText">ROCK FESTA</p>
                {hovered && (
                  <video autoPlay loop muted playsInline >
                    <source src={process.env.PUBLIC_URL + "/videos/fire.mp4"} type="video/mp4" />
                  </video>
                )}
              </li> */}
                <li
                className="Game-Page"
                onClick={() => handleSectionClick("gameinfo")}
                // onMouseEnter={() => setGameHovered(true)}
                // onMouseLeave={() => setGameHovered(false)}
              >
                <p className="GameInfoText">Console Game</p>
                  <video autoPlay loop muted playsInline >
                    <source src={process.env.PUBLIC_URL + "/videos/game.mp4"} type="video/mp4" />
                  </video>
              </li>
              {/* <li
                className="Game-Page"
                onClick={() => handleSectionClick("gameinfo")}
                onMouseEnter={() => setGameHovered(true)}
                onMouseLeave={() => setGameHovered(false)}
              >
                <p className="GameInfoText">Console Game</p>
                {gameHovered && (
                  <video autoPlay loop muted playsInline >
                    <source src={process.env.PUBLIC_URL + "/videos/game.mp4"} type="video/mp4" />
                  </video>
                )}
              </li> */}
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
                    <p style={{ backgroundImage: `url(${selectedSection === "soundnovel" ? NovelIMGFirst : selectedSection === "rockfest" ? RockIMGFirst : GameIMGFirst})` }}></p>
                    </div>
                  </ul>
                  <ul>
                  <MonitorTitle soundnovel={selectedSection === "soundnovel"} rockfest={selectedSection === "rockfest"} gameinfo={selectedSection === "gameinfo"}>
                    {selectedSection === "soundnovel" && "SOUND NOVEL"}
                    {selectedSection === "rockfest" && "ROCK FESTIVAL"}
                    {selectedSection === "gameinfo" && "Game InfoMation"}
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
                            {/* <p>{MonitorDiscriptions[selectedSection].text}</p> */}
                              <div>
                                <button onClick={() => window.open(MonitorDiscriptions[selectedSection].githubLink, '_blank')}>
                                  Github
                                </button>
                                <button onClick={() => window.open(MonitorDiscriptions[selectedSection].webLink, '_blank')}>
                                  Web
                                </button>
                                <button
                                  className="developBtn"
                                  onClick={() => {
                                  navigate(MonitorDiscriptions[selectedSection].route);
                                  }} >
                                  Develop Guide
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
    </>
  );
};

export default ThirdSection;