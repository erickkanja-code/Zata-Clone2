import React from 'react'

const Pricing = ({ items }) => {
  return (
    <section className='pricing' id='pricing'>
      {items.map((item) => (
        <div className={item.plan}>
          <p className='benefit-plan'>{item.plan}</p>
          <p className='benefit-comment'>{item.comment}</p>
          <p className='benefit-cost'>{item.cost}</p>
          <ul className='benefit-perks'>
            {item.descriptions.map((description) => (
                <li key={description}>{description}</li>
            ))}
            <button className='signup-button' id='benefit-signup'>Sign Up</button>
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Pricing
