import React from 'react'
import Layout from './Layout'
import Titre from '../../components/Titre'
import TextField from '../../components/TextField'
import Bouton from '../../components/Bouton'
import LinkTo from '../../components/LinkTo'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Connexion() {
    const navigate = useNavigate()
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleSumit = (e) => {
        e.preventDefault();
        const user = {email, password }

        fetch(
            'https://fullstackodc.onrender.com/auth/login',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            }
        ).then((res) => res.json())
        .then((data)=>{
            if(data.token){
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/')
            }else{
                Swal.fire(
                    'Email or Password incorrect!',
                    '',
                    'warning'
                  )
            }
        })

    }

    return (
        <Layout>
            <div>
                <Titre titre="Connexion" />
                <form action="">
                    <div>
                        <TextField onChange={(e)=>setEmail(e.target.value)} label="Email" type="email" placeholder="email" />
                    </div>
                    <div>
                        <TextField onChange={(e)=>setPassword(e.target.value)} label="Mot de passe" type="password" placeholder="mot de passe" />
                    </div>
                    <div className='flex justify-center'>
                        <Bouton onClick={handleSumit} titreBtn="Se connecter" />
                    </div>
                    <div className='flex justify-center'>
                        <LinkTo textInUp="Vous n'avez pas de compte?" lien="/inscription" lbLien="S'inscrire !" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Connexion