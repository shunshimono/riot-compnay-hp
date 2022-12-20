import React, { useCallback, useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { ClosedMenu, OpendMenu } from "../../icons"

const links = [
  {
    to: "/about",
    label: "私たちについて",
    displayValue: "about",
  },
  {
    to: "/news",
    label: "ニュース",
    displayValue: "news",
  },
  {
    to: "/recruit",
    label: "採用情報",
    displayValue: "recruit",
  },
  {
    to: "/service",
    label: "サービスについて",
    displayValue: "service",
  },
  {
    to: "/info",
    label: "会社概要",
    displayValue: "info",
  },
  {
    to: "/from",
    label: "お問合せ",
    displayValue: "from",
  },
]

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
        <MenuLink openMenu={openMenu}>
          <ul>
            {links.map(v => {
              return (
                <Links>
                  <Link to={v.to} aria-label={v.label}>
                    {v.displayValue}
                  </Link>
                </Links>
              )
            })}
          </ul>
        </MenuLink>
      </Wrapper>
    </NaviHeader>
  )
}

const NaviHeader = styled.header`
  height: 76px;
  width: 100%;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  margin-bottom: -76px;
`

const Wrapper = styled.div<{ openMenu: boolean }>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1.6rem;
  ${({ openMenu }) =>
    openMenu &&
    css`
      /* background: blue; */
      background: white;
      border-bottom: 1px solid yellow;
    `}
`

const HamburgerMenu = styled.button`
  display: block;
  svg {
    width: 20px;
    height: 20px;
  }
`

const MenuLink = styled.nav<{ openMenu: boolean }>`
  position: absolute;
  top: 76px;
  background: white;
  width: 100%;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s;
  ${({ openMenu }) =>
    openMenu &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

const Links = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid yellow;
`
