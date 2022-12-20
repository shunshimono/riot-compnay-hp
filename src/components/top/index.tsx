import React from "react"
import styled from "@emotion/styled"
// @ts-ignore
import Test from "../../_movie/pexels-timo-volz-5544054.mp4"
import { COLOR } from "../constant/color"

export const Top = () => {
  return (
    <Wapper>
      <StyledVideo src={Test} autoPlay muted loop></StyledVideo>
      <Heading>
        <div>{`MAKE\nLEARNIG.`}</div>
        <p>{`学ぶ環境をデザインする`}</p>
      </Heading>
      <BackImg></BackImg>
    </Wapper>
  )
}

const Wapper = styled.div`
  position: relative;
`

const StyledVideo = styled.video`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${COLOR.DARK.code},
    ${COLOR.LIGHT.code} 50%,
    ${COLOR.DARK.code}
  );
  z-index: 0;
`

const Heading = styled.div`
  font-family: "BebasNeueRegular";
  font-size: 15vw;
  letter-spacing: 0.05em;
  width: 100%;
  line-height: 1;
  padding-left: 5rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  z-index: 2;
  color: ${COLOR.LIGHT.code};
  transform: translate(-50%, -50%);
  p {
    margin-top: 0.3em;
    padding-left: 10rem;
  }
`

const BackImg = styled.image`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  z-index: 1;
  background-image: url("https://www.vlcholdings.com/images/filter.png");
`
