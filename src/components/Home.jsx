import React from 'react'
import NavbarOptions from './NavbarOptions'
import Hero from './Hero'
import Clients from './Clients'

const Home = () => {
  const items = [
    {
      url: '',
      title: 'Easy Integration',
      paragraph: 'Plug into your exisitng system easily with support from our teams'
    },
    {
      url: '',
      title: 'Developer Friendly',
      paragraph: 'Simple docs, transparent policies and tools to help anyone integrate'
    },
    {
      url: '',
      title: 'Trusted Compliance',
      paragraph: 'RRA-certified to keep your operations legit and stress-free'
    }
  ]

  return (
    <main>
    <Hero/>
    <Clients />
    <section className='support'>
      <div className='left-container'>
        <p>How we support Enterprises all over the world</p>
        <p>  We make it simple for enterprises to adopt our solutions, no matter their size or system setup. Our team provides full support throughout integration, backed by clear documentation and developer-friendly tools. With certified compliance and transparent processes, you can focus on growing your business while we handle the technical and regulatory details, ensuring a smooth and stress-free experience.  
</p>
      </div>
      <div className='right-container'>
          {items.map((item) => (
        <div className='support-card'>
            <img src={item.url} alt={item.title} />
            <div className='support-paragraphs'>
              <p>{item.title}</p>
              <p>{item.paragraph}</p>
            </div>
        </div>
          ))}
      </div>


    </section>
    </main>
  )
}

export default Home
