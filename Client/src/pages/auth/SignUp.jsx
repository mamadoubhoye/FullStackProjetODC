import React from 'react'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'

function SignUp() {
  return (
    <div className="grid grid-cols-2 bg-[url('./assets/img/background.jpg')]   min-h-screen flex flex-col justify-center items-center">
        <div className='text-white flex justify-center text-center'>
            <h1 className='text-4xl font-bold w-1/2'>Bienvenue sur Dev FullStack ODC</h1>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col bg-zinc-800/75 w-1/2 border rounded-3xl p-4 space-y-2'>
                <h1 className='text-3xl font-bold text-center my-5 text-white'>Inscription</h1>
                <div className='flex flex-row space-x-5'>
                    <div className='flex flex-col basis-1/2'>
                        <label className='text-white' htmlFor="nom">Nom</label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type="text" id='nom' name='prenom' placeholder='nom' />
                    </div>
                    <div className='flex flex-col basis-1/2'>
                        <label className='text-white' htmlFor="prenom">Prénom</label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type="text" id='prenom' name='prenom' placeholder='prenom' />
                    </div>
                </div>
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
                <div>
                    <div className='flex flex-col'>
                        <label className='text-white' htmlFor="confirmation">Confirmer le mot de passe</label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' id='password' name='password' type="password" placeholder='mot de passe' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='placeholder:italic placeholder:text-slate-400 block bg-white px- border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm'>S'inscrire</button>
                </div>
                <div className='flex justify-center'>
                    <div className='text-white'>Vous avez déjà un compte? <a className='underline' href="/signin">Se connecter !</a></div>
                </div>
                <div className='flex justify-center text-white'>
                    <a className='flex flex-row space-x-2 items-center' href=""><img src={google} width="30px" alt="" /><span>Se connecter avec Google</span></a>
                </div>
                <div className='flex justify-center text-white'>
                    <a className='flex flex-row space-x-2 items-center' href=""><img src={facebook} width="30px" alt="" /><span>Se connecter avec Facebook</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp