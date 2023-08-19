import React from 'react'

function TextField({label, type, placeholder,onChange,name}) {
  return (
    <div className='flex flex-col w-full p-1'>
        <label className='text-white' htmlFor="textField">{label}</label>
        <input onChange={onChange} name={name} className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextField