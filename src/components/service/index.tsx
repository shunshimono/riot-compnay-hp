import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { COLOR } from "../constant/color"

export const Service = () => {
  return (
    <Wrapper>
      <Heading>主要事業</Heading>
      <Card>
        <StaticImage
          src="../../images/team.jpg"
          alt="チーム開発"
          placeholder="blurred"
          loading="lazy"
          className="static-image"
        />
        <Title>受託開発事業</Title>
        <Description>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Description>
      </Card>
      <Card>
        <StaticImage
          src="../../images/ses.jpg"
          alt="SES"
          placeholder="blurred"
          loading="lazy"
          className="static-image"
        />
        <Title>SES事業</Title>
        <Description>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Description>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 15px;
`

const Heading = styled.div`
  position: relative;
  padding-left: 20px;
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  position: relative;
  ::before {
    content: "";
    line-height: 1.6;
    display: block;
    position: absolute;
    width: 3px;
    height: 28px;
    left: 0;
    top: 0;
    background-color: #c2a47e;
  }
`

const Card = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  background: ${COLOR.LIGHT.code};
`
const Title = styled.div`
  margin-top: 1.6rem;
  font-weight: bold;
  font-size: 16px;
`

const Description = styled.div`
  margin-top: 1.4rem;
  font-size: 14px;
  font-weight: 300;
`
