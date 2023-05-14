import React from "react"
import "./style.css"
import ProfileImg from "../../assets/images/profile.jpeg"

export default function AboutMe() {
  return (
    <div className="me-container">
      <div className="me-left-container">
        <img src={ProfileImg} className="profile-img" alt="profile-img" />
      </div>
      <div>
        <h2 className="heading-3">About Me</h2>
        <p className="large-text">
          Hi I'm Zuhair Naqi, a passionate Software Engineer and an Open Source
          Contributor for Web and Mobile Apps, mainly Javascript ♥.
          <br/><br/>
          I've been working in this industry for 4+ years, working with <b>service-based</b> and <b>product-based</b> companies usually
          building and maintaing solutions using <b>MERN</b>, <b>MEVN</b> and <b>MEAN</b> stacks.
        </p>
      </div>
    </div>
  )
}
