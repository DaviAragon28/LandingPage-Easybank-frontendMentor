import React from 'react'
import { Article } from '../Article/Article'
import imageRestaurant from '../../assets/image-restaurant.jpg'
import imageConfetti from '../../assets/image-confetti.jpg'
import imagePlane from '../../assets/image-plane.jpg'

export const ThirdSection = () => {
    return (
        <section className='pt-10 pb-24 px-5 flex flex-col gap-5 md:gap-20'>
            <h2 className='text-2xl text-center lg:text-4xl'>Latest Articles</h2>
            <div className='flex flex-wrap gap-8 justify-evenly md:gap-2'>
                <Article
                    by='Claire Robinson'
                    title='Receive money in any currency with no fees'
                    desc='The world is getting smaller and we’re becoming more mobile. So why should you be
                    forced to only receive money in a single…'
                />
                <Article
                    img={imageRestaurant}
                    by='Wilson Hutton'
                    title='Treat yourself without worrying about money'
                    desc='Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you…'
                />
                <Article
                    img={imagePlane}
                    by='Wilson Hutton'
                    title='Take your Easybank card wherever you go'
                    desc='We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you…'
                />
                <Article
                    img={imageConfetti}
                    by='Claire Robinson'
                    title='Our invite-only Beta accounts are now live!'
                    desc='After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site...'
                />
            </div>
        </section>
    )
}
