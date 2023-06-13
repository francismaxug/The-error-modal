import React from 'react'
import SubSection from './SubSection'
import './Page.css'
const Landing = ({cSharp}) => {
  return (
    <div className='nicee'>
      {cSharp.map((tool, index)=> <SubSection serach={tool} key={index}/>)}
    </div>
  )
}

export default Landing
