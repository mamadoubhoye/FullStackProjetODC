import React from 'react'

function Bouton({titreBtn, onClick}) {
  return (
    <button onClick={onClick} className='placeholder:italic placeholder:text-slate-400 block bg-white px- border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm my-1'>{titreBtn}</button>
  )
}

export default Bouton