import React, { useState, ChangeEventHandler, FormEventHandler } from "react"
import styled from "@emotion/styled"
import { COLOR } from "../constant/color"

export const From = () => {
  const [value, setValue] = useState<{ [key in string]: string }>({})

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    value[e.target.id] = e.target.value
    setValue({ ...value })
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    console.log("onSubmit")
    e.preventDefault()
    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
    console.log(res)
  }
  return (
    <Wrapper>
      <Heading>お問い合わせ</Heading>
      <Card>
        <form onSubmit={onSubmit}>
          <Label>
            <Title>メールアドレス</Title>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="（例）株式会社RIOT"
              value={value["email"] || ""}
              onChange={handleChange}
            />
          </Label>
          <Label>
            <Title>本文</Title>
            <Textarea
              name="emailBody"
              id="emailBody"
              value={value["emailBody"] || ""}
              onChange={handleChange}
            />
          </Label>
          <div>
            <Button type="submit">送信する</Button>
          </div>
          <div>
            <Button type="reset">リセットする</Button>
          </div>
        </form>
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
  padding: 1rem 1.5rem;
  background: ${COLOR.LIGHT.code};
`

const Input = styled.input`
  background-color: #eee;
  width: 100%;
  height: 30px;
  border-radius: 4px;
`

const Textarea = styled.textarea`
  background-color: #eee;
  width: 100%;
  height: 100px;
  resize: vertical;
  border-radius: 4px;
`

const Title = styled.div`
  padding: 1rem 0;
`

const Label = styled.label`
  display: block;
`

const Button = styled.button`
  margin: 1.5rem 0;
  display: block;
  width: 100%;
  border-radius: 8px;
  height: 40px;
  text-align: center;
  background: #eee;
`
