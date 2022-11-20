import React from 'react'
import LogoEasybank from '../../assets/logo.svg'
import { ButtonRequest } from '../ButtonRequest/ButtonRequest'
import { Links } from '../Links/Links'
import { SocialMedia } from '../SocialMedia/SocialMedia'


export const Footer = () => {
    return (
        <footer className='bg-[#2d314d] py-8 gap-4  text-white flex flex-col justify-around md:flex-row'>
            <div className='flex flex-col justify-center gap-11 items-center '>
                <div className='bg-white w-max mx-auto lg:mx-0'>
                    <img src={LogoEasybank} alt="Logo Easybank" />
                </div>
                <SocialMedia />
            </div>
            <Links footer styles='py-4 lg:flex-row gap-6' />
            <div className='flex flex-col justify-center gap-11 items-center'>
                <ButtonRequest />
                <span className='text-sm text-[#9698a6] text-center'>© Easybank. All Rights Reserved</span>
            </div>
        </footer>
    )
}
