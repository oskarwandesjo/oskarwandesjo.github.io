import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div style={{ align: 'center'}}>
      <Header />
      <h1 align={"center"}>Oskar Wändesjö</h1>
      <Footer />
    </div>
  )
}