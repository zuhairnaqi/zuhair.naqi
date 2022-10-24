import React, { useMemo } from "react"
import Banner from "../components/Banner/Banner"
import AboutMe from "../components/AboutMe/AboutMe"
import "../styles/global.css"
import ThemeToggler from "../components/ThemeToggler/ThemeToggler"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Grid, Icon } from "@mui/material"
import { socialProfileLinks } from "../constants/info"

export function Head() {
  return <title>Zuhair Naqi | Portfolio</title>
}

export default function Home() {
  return (
    <div>
      <div className="switch-theme">
        <ThemeToggler />
      </div>
      <Banner />
      <AboutMe />
      <section>
        <h2 className="heading-2">Reach out to me!</h2>
        <p className="large-text">
          Discuss a project or just want to say hi? I'm just one click away
        </p>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <a
              href={socialProfileLinks.LINKEDIN}
              aria-label={socialProfileLinks.LINKEDIN}
              target="_blank"
              label="button"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="primary" />
            </a>
          </Grid>
          <Grid item>
            <a
              href={socialProfileLinks.GITHUB}
              aria-label={socialProfileLinks.GITHUB}
              target="_blank"
              label="button"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}
