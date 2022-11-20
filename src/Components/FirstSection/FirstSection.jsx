import React from 'react'
import mockUps from '../../assets/image-mockups.png'
import { ButtonRequest } from '../ButtonRequest/ButtonRequest'


export const FirstSection = () => {
    return (
        <section className='flex flex-col gap-2  pb-10 md:flex-row-reverse md:justify-around md:pt-2 md:pb-2 md:h-[600px]'>

            <div className={` bg-[url('src/assets/bg-intro-mobile.svg')] bg-no-repeat bg-right
                md:bg-[url('src/assets/bg-intro-desktop.svg')] 
                md:bg-contain md:bg-right md:w-[47.333333%;] md:relative `}>

                <img className=' w-80 h-auto mx-auto md:w-[400px] md:h-[550px] md:absolute md:right-0 md:-bottom-10 md md:mx-0 lg:-bottom-20' src={mockUps} alt="" />

            </div>

            <div className='flex flex-col gap-4 px-4 text-center max-w-lg mx-auto 
                md:w-5/12  md:justify-center md:text-left md:pl-8'>
                <h1 className='text-4xl lg:text-5xl'>Next generation digital banking</h1>
                <p className=' text-[#9698a6] text-sm lg:text-lg'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <ButtonRequest />
            </div>

        </section>
    )
}
