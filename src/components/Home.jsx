import React from 'react'
import NavbarOptions from './NavbarOptions'
import Hero from './Hero'
import Clients from './Clients'
import Support from './Support'

import Regulated from './Regulated'

const Home = () => {


  return (
    <main>
    <Hero/>
    <Clients />
    <Support />
    <section>
      <div>
        <p>What Benefit</p>
        <ul></ul>
      </div>
  <iframe
    width="500"
    height="auto"
    src="https://www.youtube.com/embed/i0Ni3k4qH28?start=8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>


    </section>
    </main>
  )
}

export default Home
