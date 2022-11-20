import React, { useContext } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import LogoEasybank from '../../assets/logo.svg'
import { AppContext } from '../../context/context'
import { ButtonRequest } from '../ButtonRequest/ButtonRequest'
import { Links } from '../Links/Links'

export const Header = () => {
    const { handleMenu, menu } = useContext(AppContext)
    return (
        <nav className=' shadow-lg fixed left-0 right-0  bg-white flex justify-between px-3 py-4 items-center z-10 md:justify-around md:py-3 lg:justify-around'>
            <img src={LogoEasybank} alt="Logo Easybank" className='cursor-pointer' />
            <div className='md:hidden'>
                {
                    menu
                        ? <MdClose size={28} onClick={handleMenu} />
                        : <MdMenu size={28} onClick={handleMenu} />
                }
            </div>
            <div className='hidden md:block '>
                <Links header styles='gap-6 md:flex-row text-[#9698a6] font-semibold '  />
            </div>
            <div className='hidden md:block'>
                <ButtonRequest />
            </div>
        </nav>
    )
}
