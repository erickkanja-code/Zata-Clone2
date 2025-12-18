import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiPuzzle } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Support = () => {
  const items = [
    {
      icon: <VscWorkspaceTrusted size={30}/>,
      title: 'Easy Integration',
      paragraph: 'Plug into your exisitng system easily with support from our teams'
    },
    {
      icon: <GiPuzzle size={30}/>,
      title: 'Developer Friendly',
      paragraph: 'Simple docs, transparent policies and tools to help anyone integrate'
    },
    {
      icon: <LiaLaptopCodeSolid size={40}/>,
      title: 'Trusted Compliance',
      paragraph: 'RRA-certified to keep your operations legit and stress-free'
    }
  ]
  return (
    <section className='support'>
      <div className='left-container'>
        <p id='left-paragraph1'>How we support Enterprises all over the world</p>
        <p id='left-paragraph2'>  We make it simple for enterprises to adopt our solutions, no matter their size or system setup. With certified compliance and transparent processes, you can focus on growing your business while we handle the technical and regulatory details, ensuring a smooth and stress-free experience.  
</p>
      </div>
      <div className='right-container'>
          {items.map((item) => (
        <div className='support-card'>
            <div className='support-icons'>{item.icon}</div>
            <div className='support-paragraphs'>
              <p id='support1'>{item.title}</p>
              <p id='support2'>{item.paragraph}</p>
            </div>
        </div>
          ))}
      </div>


    </section>
  )
}

export default Support
