import React from 'react'


function SignIn() {
  return (
    <div className=" bg-[url('./assets/img/background.jpg')]   min-h-screen flex flex-col justify-center items-center">
        <div className='flex flex-col bg-zinc-800/75 w-98 border rounded-3xl p-4 space-y-2'>
            <h1 className='text-3xl font-bold my-5 text-white text-center'>Connexion</h1>
            <div>
                <div className='flex flex-col'>
                    <label className='text-white' htmlFor="email">Email</label>
                    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type="email" id='email' name='email' placeholder='email' />
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <label className='text-white' htmlFor="motdepasse">Mot de passe</label>
                    <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' id='password' name='password' type="password" placeholder='mot de passe' />
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='placeholder:italic placeholder:text-slate-400 block bg-white px- border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm'>Se connecter</button>
            </div>
            <div className='flex justify-center'>
                <div className='text-white'>Vous n'avez pas de compte? <a className='underline' href="/signup">S'inscrire !</a></div>
            </div>
        </div>
    </div>
  )
}

export default SignIn