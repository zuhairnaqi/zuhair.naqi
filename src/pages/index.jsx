import React, { useMemo } from "react"
import Banner from "../components/Banner/Banner"
import AboutMe from "../components/AboutMe/AboutMe"
import "../styles/global.css"
import ThemeToggler from "../components/ThemeToggler/ThemeToggler"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import { Grid, Divider, Box, Button } from "@mui/material"
import { socialProfileLinks } from "../constants/info"

export function Head() {
  return <title>Zuhair Naqi | Portfolio</title>
}

export default function Home() {
  return (
    <div>
      <div className="switch-theme">
        <Button variant="outlined" className="resume-button">
          <a href={'../Zuhair_Naqi_Resume.pdf'} target="_blank" rel="noopener noreferrer" className="no-underline">
            Resume
          </a>
        </Button>
        <ThemeToggler />
      </div>
      <Banner />
      <section>
        <AboutMe />
      </section>
      <Box mx={10}>
        <Divider light/>
      </Box>
      <section className="footer-section">
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
              <LinkedInIcon color="primary" fontSize="large" />
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
              <GitHubIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a
              href={socialProfileLinks.MAIL}
              aria-label={socialProfileLinks.MAIL}
              target="_blank"
              label="button"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon fontSize="large" color="warning" />
            </a>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}
