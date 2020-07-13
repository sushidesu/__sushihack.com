import React from "react"
import emStyled, { CreateStyled } from "@emotion/styled"
import { ThemeProvider as EmThemeProvider } from "emotion-theming"

type Theme = {
  color: {
    primary: string
    secondary: string
    accent: string
  }
}

const theme: Theme = {
  color: {
    primary: "#ffd058",
    secondary: "#ff6767",
    accent: "#4ed092",
  },
}

export const ThemeProvider: React.FC = ({ children }) => (
  <EmThemeProvider theme={theme}>{children}</EmThemeProvider>
)

export const styled = emStyled as CreateStyled<Theme>
