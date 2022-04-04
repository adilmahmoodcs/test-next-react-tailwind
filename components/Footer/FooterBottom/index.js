import Instagram from '../../../assets/socialIcons/instagram'
import SocialIcon from '../../../assets/socialIcons/social-icon'
import Twitter from '../../../assets/socialIcons/twitter'
import Youtube from '../../../assets/socialIcons/youtube'

export default function FooterBottom () {
  return (
    <div className='flex justify-between items-center bg-dark-900 w-screen h-16 px-5 md:px-14 lg:px-20 absolute left-0 bottom-0'>
      <p className='text-white'>© 2021 T360 Inc. All rights reserved</p>

      <div className='flex items-center gap-2'>
        <Icon>
          <Youtube />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <SocialIcon />
        </Icon>
        <Icon>
          <Twitter />
        </Icon>
      </div>
    </div>
  )
}

const Icon = ({ children }) => {
  return <button>{children}</button>
}
