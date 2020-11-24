import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    <div>
      <SEO/>
      {/* <Header /> */}
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '50%', padding: '0 10px 0 0' }}>
            <h1>Oskar Wändesjö<br />   ___   </h1>
            <p>Currently studying a MSc Eng in information and communication technologies at Lund University.</p>
            <p>Check out my <a href="../../CV_Oskar_Wandesjo_Eng.pdf">resume</a>, contact <a href="mailto:oskar.wandesjo@gmail.com">me</a> or take a look at my <a href="https://www.linkedin.com/in/oskarwandesjo/">LinkedIn</a>.</p>
          </div>
          <div style={{ width: '50%', paddingTop: '10px'}}>
            <Img fluid={data.profilePicture.childImageSharp.fluid} alt="Oskar Wändesjö"/>
          </div>
        </div>
        {/* <div>
          <h2>Projects</h2>
          <p>Under Construction</p>
        </div> */}
      </Container>
      {/* <Footer /> */}
    </div>
  )
}

export const query = graphql`
  query {
    profilePicture: file(relativePath: {eq: "profile_picture.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`