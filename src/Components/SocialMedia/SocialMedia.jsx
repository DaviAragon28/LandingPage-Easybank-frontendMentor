import React from 'react'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconYoutube from '../../assets/icon-youtube.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconPinterest from '../../assets/icon-pinterest.svg'

export const SocialMedia = () => {
  return (
    <div className='flex gap-4 justify-center'>
        <img className='cursor-pointer' src={iconFacebook} alt="Icon Facebook" />
        <img className='cursor-pointer' src={iconYoutube} alt="Icon Youtube" />
        <img className='cursor-pointer' src={iconTwitter} alt="Icon Twitter" />
        <img className='cursor-pointer' src={iconPinterest} alt="Icon Pinterest" />
        <img className='cursor-pointer' src={iconInstagram} alt="Icon Instagram" />
    </div>
  )
}
