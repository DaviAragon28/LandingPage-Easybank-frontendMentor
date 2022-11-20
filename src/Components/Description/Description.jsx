import React from 'react'
import iconBudgeting from '../../assets/icon-budgeting.svg'

export const Description = ({ img = iconBudgeting, title, desc  }) => {
  return (
    <article className='flex flex-col text-center gap-2 max-w-md'>
        <img className='w-20 h-20 mx-auto' src={img} alt="" />
        <h3 className='text-lg'>{title}</h3>
        <p className='text-sm text-[#9698a6] max-w-[284px]'>{desc}</p>
    </article>
  )
}
