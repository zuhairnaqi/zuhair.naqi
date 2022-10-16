import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import FormControlLabel from "@mui/material/FormControlLabel"
import {MaterialUISwitch} from './SwitchStyled'

export default function () {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={theme === "dark"}
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            />
          }
        />
      )}
    </ThemeToggler>
  )
}
