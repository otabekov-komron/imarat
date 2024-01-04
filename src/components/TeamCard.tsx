import { teamLead } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const TeamCard = () => {
  return (
    <div className='team_card'>
        <Image className='team_card_img' src={teamLead} alt='member'/>
        <div className='team_card_desc'>
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
    </div>
  )
}

export default TeamCard