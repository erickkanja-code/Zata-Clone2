import React from 'react'
import dpo from '../graphics/DPO.jpg'
import rra from '../graphics/RRA.png'
import rssb from '../graphics/RSSB.webp'

const Regulated = () => {
  return (
    <section className='clients'>
          <p className='clients-title'>Regulated By</p>
          <div className='client-logos'>
            <img src={dpo} className='regulator-logo' alt="ingabo plant health logo" />
            <img src={rra} className='regulator-logo' alt="international school of kigali logo" />
            <img src={rssb} className='regulator-logo' alt="mulika farms logo" />
          </div>
    </section>
  )
}

export default Regulated
