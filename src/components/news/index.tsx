import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../constant/color"

export const News = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>NEWS</Heading>
        <Container>
          <Title>お知らせ 2022.12.31</Title>
          <Description>
            業績向上に伴い、資本金を400万から1,000万に増額しました
          </Description>
        </Container>
        <Container>
          <Title>お知らせ 2021.11.24</Title>
          <Description>事業拡大の為に、本社を移転しました</Description>
        </Container>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 15px;
`

const Heading = styled.div`
  background: ${COLOR.DARK.code};
  color: ${COLOR.LIGHT.code};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`

const Card = styled.div`
  margin-bottom: 20px;
  background: ${COLOR.LIGHT.code};
`

const Title = styled.div`
  padding: 1rem 1.5rem;
  color: #999;
`

const Description = styled.div`
  padding: 1rem 1.5rem;
  white-space: pre-wrap;
`

const Container = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`
