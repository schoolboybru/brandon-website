import React from "react";
import "./layout.css";

type Link = {
    link: string,
    name: string
}

interface HeaderProps {
    title: string,
    links: Link[]
}

export const Header:React.FC<HeaderProps> = ({
    title,
    links
}) => {

    return(
        <header className='flex bg-gray-200 h-16 items-center px-8 shadow mx-auto w-screen'>
            <ul className='flex w-screen justify-between'>
                <h1>{title}</h1>
                <div className='flex divide-x divide-gray-800 justify-evenly'>
                {links.map(item => (
                    <li className='px-3'>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
                </div>
            </ul>
        </header>
    )
}
