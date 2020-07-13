import React from "react"
import { styled } from "../themes"

export const Header = () => <Wrapper>sushihack</Wrapper>

const Wrapper = styled.header`
  border-bottom: 2px solid #eee;
  color: ${({ theme }) => theme.color.primary};
`
