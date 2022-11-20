import React from 'react'
import { Description } from '../Description/Description'
import iconApi from '../../assets/icon-api.svg'
import iconOnline from '../../assets/icon-online.svg'
import iconOnboarding from '../../assets/icon-onboarding.svg'


export const SecondSection = () => {
    return (
        <section className='bg-[#f3f4f6]  px-5 py-10 flex flex-col gap-10 lg:h-auto lg:min-h-[560px] lg:justify-around'>
            <div className='text-center flex flex-col gap-2 max-w-md mx-auto '>
                <h3 className='text-center text-2xl px-6 lg:text-4xl lg:px-0'>
                    Why choose Easybank?
                </h3>
                <p className='text-sm text-[#9698a6] '>
                    We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.
                </p>
            </div>
            <div className='flex flex-row gap-4 flex-wrap justify-center md:gap-6 lg:pb-1 '>
                <Description
                    img={iconOnline}
                    title='Online Banking'
                    desc=' Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world.'
                />
                <Description 
                    title='Simple Budgeting'
                    desc='See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits.'
                />
                <Description 
                    img={iconOnboarding}
                    title='Fast Onboarding'
                    desc='We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.'
                />
                <Description 
                    img={iconApi}
                    title='Open API'
                    desc='Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier.
                  '
                />
            </div>
        </section>
    )
}
