import React from 'react'
import Layout from './Layout'
import Titre from '../../components/Titre'
import TextField from '../../components/TextField'
import Bouton from '../../components/Bouton'
import LinkTo from '../../components/LinkTo'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'
import { useState } from 'react'
import Swal from 'sweetalert2'

function Inscription({ titre, label, type, placeholder, titreBtn, textInUp, lien, lbLien }) {
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [passwordConfirmation, setPasswordConfirmation] = useState(' ')

    const handleSumit = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, email, password }
        if (password !== passwordConfirmation) {
            setPassword("")
            setPasswordConfirmation("")
            alert('Mot de passe erreur')
        } else {
            fetch(
                `https://fullstackodc.onrender.com/auth/register`,
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                }
            ).then((res) => {
                Swal.fire(
                    'Successfully!',
                    '',
                    'success'
                  )
            }).then()
        }


    }
    return (
        <Layout>
            <div>
                <Titre titre="Inscription" />
                <form action="">
                    <div className='grid grid-cols-2 gap-2'>
                        <TextField onChange={(e) => setLastName(e.target.value)} label="Nom" type="text" placeholder="nom" />
                        <TextField onChange={(e) => setFirstName(e.target.value)} label="Prénom" type="text" placeholder="prenom" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="email" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setPassword(e.target.value)} label="Mot de passe" type="password" placeholder="mot de passe" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setPasswordConfirmation(e.target.value)} label="Confirmation du mot de passe" type="password" placeholder="mot de passe" />
                    </div>
                    <div className='flex justify-center'>
                        <Bouton onClick={handleSumit} titreBtn="Inscription" />
                    </div>
                    <div className='flex py-2 justify-center'>
                        <LinkTo textInUp="Vous avez déjà un compte? " lien="/connexion" lbLien="Se connecter !" />
                    </div>
                    <div className='flex py-2 justify-center text-white'>
                        <a className='flex flex-row space-x-2 items-center' href=""><img src={google} width="30px" alt="" /><span>Se connecter avec Google</span></a>
                    </div>
                    <div className='flex py-2 justify-center text-white'>
                        <a className='flex flex-row space-x-2 items-center' href=""><img src={facebook} width="30px" alt="" /><span>Se connecter avec Facebook</span></a>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Inscription