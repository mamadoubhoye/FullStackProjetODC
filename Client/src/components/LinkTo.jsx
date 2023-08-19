import React from 'react'
import { Link } from 'react-router-dom'

function LinkTo({textInUp,lien,lbLien}) {
  return (
    <div className='text-white'>{textInUp} <Link className='underline' to={lien}>{lbLien}</Link></div>
  )
}

export default LinkTo