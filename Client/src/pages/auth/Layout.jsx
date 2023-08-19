import React from 'react'

function Layout({children}) {
  return (
    <div className="grid grid-cols-2 items-center bg-[url('./assets/img/background.jpg')] w-full min-h-screen">
        <h1 className='text-4xl flex justify-center text-white font-bold'>Bienvenue sur le site Dev FullStack ODC</h1>
        <div className='bg-black/50 border justify-center rounded-3xl p-5 w-96'>
            {children}
        </div>
    </div>
  )
}

export default Layout