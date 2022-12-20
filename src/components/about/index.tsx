import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../constant/color"

export const About = () => {
  return (
    <Wrapper>
      <Heading>会社概要</Heading>
      <Card>
        <Container>
          <Title>商号</Title>
          <Description>株式会社RIOT</Description>
        </Container>
        <Container>
          <Title>設立</Title>
          <Description>2018年1月23日</Description>
        </Container>
        <Container>
          <Title>本社</Title>
          <Description>
            {`〒150-0012 東京都渋谷区広尾2丁目13-6\nark 202`}
          </Description>
        </Container>
        <Container>
          <Title>事業内容</Title>
          <Description>システム開発</Description>
        </Container>
        <Container>
          <Title>従業員数</Title>
          <Description>4名</Description>
        </Container>
        <Container>
          <Title>資本金</Title>
          <Description>1,000万円（2022年1月現在）</Description>
        </Container>
        <Container>
          <Title>役員構成</Title>
          <Description>代表取締役CEO:下野隼</Description>
        </Container>
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
  background: ${COLOR.LIGHT.code};
`

const Title = styled.div`
  padding: 1em 1.5em;
`

const Description = styled.div`
  padding: 1em 1.5em;
  white-space: pre;
`

const Container = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`
