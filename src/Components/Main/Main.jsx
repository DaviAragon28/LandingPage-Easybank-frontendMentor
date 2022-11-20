import React from 'react'
import { FirstSection } from '../FirstSection/FirstSection'
import { SecondSection } from '../SecondSection/SecondSection'
import { ThirdSection } from '../ThirdSection/ThirdSection'


export const Main = () => {
    return (
        <main className='flex flex-col'>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </main>
    )
}
