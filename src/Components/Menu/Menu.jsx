import React, { useContext, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { AppContext } from '../../context/context';
import { Links } from '../Links/Links';



export const Menu = () => {
    const { menu } = useContext(AppContext)

    return (
        <div className={` flex flex-col fixed right-0  bottom-0 top-14 backdrop-blur-md transition-all
        ease-lineare z-50 p-3 ${menu ? 'left-0 ' : 'left-[200%]'}`}>
            <Links styles='bg-white shadow-md rounded-sm py-6' header  />
        </div>
    )
}

