import React from 'react'
import dpo from './DPO.jpg'
import rra from './RRA.png'
import rssb from './RSSB.webp'

const Regulated = () => {
  return (
    <section className='clients'>
          <p className='clients-title'>Regulated By</p>
          <div className='client-logos'>
            <img src={dpo} className='client-logo' alt="ingabo plant health logo" />
            <img src={rra} className='client-logo' alt="international school of kigali logo" />
            <img src={rssb} className='client-logo' alt="mulika farms logo" />
          </div>
    </section>
  )
}

export default Regulated
