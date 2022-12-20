import React from "react"
import styled from "@emotion/styled"
// @ts-ignore
// import Test from "../../_movie/pexels-timo-volz-5544054.mp4"
import { COLOR } from "../constant/color"
import { StaticImage } from "gatsby-plugin-image"
import "large-small-dynamic-viewport-units-polyfill"

export const Top = () => {
  return (
    <Wapper>
      <StaticImage
        src="../../images/nagasaki.jpg"
        alt="トップ画像"
        placeholder="blurred"
        layout="fixed"
        loading="eager"
        className="static-image"
      />
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
  width: 100%;
  height: 100vh;
  height: calc(var(--1dvh, 1vh) * 100);
  height: 100dvh;
  .static-image {
    width: 100% !important;
    height: 100vh !important;
    height: calc(var(--1dvh, 1vh) * 100) !important;
    height: 100dvh !important;
  }
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

const BackImg = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--1dvh, 1vh) * 100);
  height: 100dvh;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  z-index: 1;
  background-image: radial-gradient(#000 35%, transparent 36%),
    radial-gradient(#000 35%, transparent 36%);
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
`
