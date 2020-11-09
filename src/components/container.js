import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
    return (
        <div className={containerStyles.container}>
            {children}
        </div>
    )
}