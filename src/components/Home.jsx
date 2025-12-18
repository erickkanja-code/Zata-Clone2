import React from 'react'
import NavbarOptions from './NavbarOptions'
import Hero from './Hero'
import Clients from './Clients'
import Support from './Support'
import Regulated from './Regulated'
import Benefit from './Benefit'
import Pricing from './Pricing'

const Home = () => {
  const items = [{plan: 'Premium', comment: 'Best for Seasonal Businesses', cost: 'Rwf 360k Pa', descriptions: ['2 Users', 'Public Share & Comments', 'Chat Support', 'New Income Apps'], button: 'Sign Up'}, 
  {plan: 'Enterprise', comment: 'Best for High Sales Volumes', cost: 'Rwf 1.0M Pa', descriptions: ['Multiple Companies', 'Full API Access', 'Dedicated EBM Assistant', 'Tech Support'], button: 'Sign Up'}, 
  {plan: 'Community', comment: 'Best for New Businesses', cost: 'Free', descriptions: ['1 Company', '2 Branches Limit', '3 Products', '1 User'], button: 'Sign Up'}]

  return (
    <main>
    <Hero/>
    <Clients />
    <Support />
    <Regulated />
    <Benefit />
    <Pricing items={items}/>
    </main>
  )
}

export default Home
