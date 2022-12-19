import React from "react"
import styled from "@emotion/styled"
// @ts-ignore
import Test from "../../_movie/pexels-timo-volz-5544054.mp4"

export const Top = () => {
  return (
    <div>
      <StyledVideo src={Test} autoPlay muted loop></StyledVideo>
    </div>
  )
}

const StyledVideo = styled.video`
  height: 100vh;
  width: 100%;
`
