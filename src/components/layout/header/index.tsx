import React, { useCallback, useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { ClosedMenu, OpendMenu } from "../../icons"

export const Header = ({ siteTitle }: any) => {
  const [openMenu, setOpenMenu] = useState(false)

  const onClickMenu = useCallback(() => {
    setOpenMenu(prev => !prev)
  }, [])

  return (
    <NaviHeader>
      <Wrapper openMenu={openMenu}>
        <Link to="/" aria-label="企業ロゴ">
          企業ロゴ
        </Link>
        <HamburgerMenu name="メニュー" type="button" onClick={onClickMenu}>
          {openMenu ? <OpendMenu /> : <ClosedMenu />}
        </HamburgerMenu>
      </Wrapper>
    </NaviHeader>
  )
}

const NaviHeader = styled.header`
  height: 76px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  margin-bottom: -76px;
`

const Wrapper = styled.div<{ openMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1.6rem;
  ${({ openMenu }) =>
    openMenu &&
    css`
      background: red;
    `}
`

const HamburgerMenu = styled.button`
  display: block;
  svg {
    width: 20px;
    height: 20px;
  }
`
