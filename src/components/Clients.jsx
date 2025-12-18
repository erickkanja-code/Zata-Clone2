import React from 'react'
import client6 from '../graphics/client6.png'
import client5 from '../graphics/client5.webp'
import client4 from '../graphics/client4.png'
import client3 from '../graphics/client3.png'
import client2 from '../graphics/client2.webp'
import client  from '../graphics/client.webp'

const Clients = () => {
  return (
    <section className='clients'>
      <p className='clients-title'>More than 18 Enterprises use Zata</p>
      <div className='client-logos'>
        <img src={client6} className='client-logo' alt="ingabo plant health logo" />
        <img src={client5} className='client-logo' alt="international school of kigali logo" />
        <img src={client4} className='client-logo' alt="mulika farms logo" />
        <img src={client3} className='client-logo' alt="vecta logo" />
        <img src={client2} className='client-logo' alt="globx logo" />
        <img src={client} className='client-logo' alt="lion logo" />
      </div>
    </section>
  )
}

export default Clients
