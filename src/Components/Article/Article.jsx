import React from 'react'
import imageCurrecy from '../../assets/image-currency.jpg'

export const Article = ({ img = imageCurrecy, by, title, desc }) => {
    return (
        <article className='rounded-md overflow-hidden cursor-pointer shadow-lg max-w-md mx-auto md:max-w-[260px] lg:mx-0' >
            <img src={img} alt="" />
            <div className='flex flex-col gap-1 py-4 px-5'>
                <small className='text-[#9698a6] text-[11px]'>By {by}</small>
                <p className='text-sm font-semibold'>{title}</p>
                <p className='text-[#9698a6] text-[12px]'>{desc}</p>
            </div>
        </article>
    )
}
