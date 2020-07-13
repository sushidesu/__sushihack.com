import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider, styled } from "../themes"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: React.FC = ({ children }) => (
  <ThemeProvider>
    <Wrapper>
      <Global styles={GlobalStyles} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
)

const GlobalStyles = css`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus,
  video:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 44px 1fr 44px;

  & > header {
    grid-area: header;
  }
  & > main {
    grid-area: main;
  }
  & > footer {
    grid-area: footer;
  }
`
