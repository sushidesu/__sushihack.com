import React from "react"
import styled from "@emotion/styled"

export const Footer = () => (
  <Wrapper>
    <CopyRight>© sushidesu</CopyRight>
  </Wrapper>
)

const Wrapper = styled.footer`
  position: relative;
  background-color: #eee;
  color: #888;
`

const CopyRight = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
