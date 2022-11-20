import React from 'react'

const stylesLi = 'cursor-pointer hover:underline'

export const Links = ({ header, footer, styles}) => {
    return (
        <ul className={`flex flex-col items-center gap-2 
            ${styles}`}>
            {   
               header && <li className={`${stylesLi}`}>Home</li>
            }
            <li className={`${stylesLi}`}>About us</li>
            <li className={`${stylesLi}`}>Contact</li>
            <li className={`${stylesLi}`}>Blog</li>
            <li className={`${stylesLi}`}>Careers</li>
            {
                footer && 
                <>
                    <li className={`${stylesLi}`}>Support</li>
                    <li className={`${stylesLi}`}>Privacy Policy</li>
                </>
            }
        </ul>
    )
}
