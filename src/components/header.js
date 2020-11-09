import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
    return (
        <div className={headerStyles.header}>
            <h1 style={{margin: '0px'}}>Header</h1>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    )
}