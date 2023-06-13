import React from 'react'
import './Page.css'
const SubSection = ({serach}) => {
  return (
    <div className='sure'>
      <div className='chil'>{serach.username} ({`${(serach.age)}years old`})</div>
    </div>
  )
}
export default SubSection
