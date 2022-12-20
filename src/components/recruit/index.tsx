import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../constant/color"

const message = `一緒に事業を作っていただける方を募集しています！\n弊社は約４年間SES事業や受託開発をしていきながらながら、自分達のスキルを磨き続けてきました。\n会社としての体力もついていき新規事業を作っていくフェーズへ突入しています。『一緒に考え一緒に悩める』そんな仲間を募集中です！\nよければ一緒に働きませんか？`

const str = `『歓迎スキル』\n- フロントエンド、サーバーサイド、インフラ、問わず何かしらの開発経験\n『必須項目』\n- 未経験の場合はポートフォリオの提出\n- ポートフォリオではなくとも、Qiita等技術系ブログのアプトプットの提出`

const str1 = `- 客先常駐にてSESの業務\n- 新規クライアントの獲得\n- 新規ビジネスモデルの提案`

const str3 = `- 客先常駐にてSESの業務\n- 新規クライアントの獲得\n- 新規ビジネスモデルの提案`

export const Recruit = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>採用情報</Heading>
        <Container>
          <Message>{message}</Message>
          <Title>#業務内容</Title>
          <Description>{str1}</Description>
          <Title>#エンジニア採用</Title>
          <Description>{str}</Description>
          <Title>#営業採用</Title>
          <Description>{str3}</Description>
          <Description>※お問い合わせフォームよりご応募ください</Description>
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
  padding: 1em 1.5em;
  font-size: 16px;
  font-weight: 700;
  color: #999;
`

const Description = styled.div`
  padding: 0 1.5em;
  white-space: pre-wrap;
  :last-of-type {
    padding: 1em 1.5em;
  }
`

const Container = styled.div``

const Message = styled.div`
  white-space: pre-wrap;
  padding: 1em 1.5em;
`
