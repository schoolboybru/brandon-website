import React from 'react';
import { Header } from "./header";
import "./layout.css";

export const Layout: React.FC = ({children}) => {
    const title = "Brandon Bachynski"

    const links = [
        { link: "#home", name: "Home"},
        { link: "#portfolio", name: "Portfolio"},
        { link: "#contact", name: "Contact"}
    ]

    return (
        <div className="container w-screen">
            <Header title={title} links={links}/>
            {children}
        </div>
    )
}
