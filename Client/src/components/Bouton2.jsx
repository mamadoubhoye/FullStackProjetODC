import React from 'react'

function Bouton2({titreBtn2,onClick}) {
  return (
    <button onClick={onClick} className='placeholder:italic text-white block bg-blue-400 px- border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm my-1'>{titreBtn2}</button>
  )
}

export default Bouton2