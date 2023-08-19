import React, { useEffect, useState } from 'react'
import Titre from '../../components/Titre'
import Bouton from '../../components/Bouton'
import Bouton2 from '../../components/Bouton2'
import PostCard from '../../components/PostCard'
import userprofile from "../../assets/img/profile.png"
import image from "../../assets/img/téléchargement.png"
import TextField from '../../components/TextField'
import { useNavigate } from 'react-router-dom'

const authData  = JSON.parse(localStorage.getItem('user'))

function Home() {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate([])
	useEffect(() => {
		fetch('https://fullstackodc.onrender.com/posts',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${authData?.token}`,

				}
			})
			.then(response => response.json())
			.then(json => setPosts(json))
	}, [])

	const destroy_session = () => {
		localStorage.removeItem('user');
		navigate('/')
	}
	return (
		<div>
			<header className='p-5 container flex mx-auto justify-around'>
				<Titre titre="Bienvenue sur notre reseau social" />
				<div className='flex flex-row space-x-2'>
					<Bouton2 onClick={destroy_session} titreBtn2="Se deconnecter" />
				</div>
			</header>
			<main>
				<section className='grid grid-cols-3'>
					<div className='col-span-2 grid lg:grid-cols-4 md:grid-cols-2 gap-2 px-4'>
						{posts.length > 0 ? posts.map(post =>
							<PostCard key={post.id}
								id={post.id}
								title={post.title}
								body={post.body}
								userImage={userprofile}
								image={post.imageUrl}

							userName={`${authData?.user?.firstName} ${authData?.user?.lastName}`}
							/>
						) :
							<button>
								<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
								</svg>
								Chargement...
							</button>}
					</div>
					<div className=''>
						<h1 className="text-2xl font-bold text-center pb-5 ">Ajouter une publication</h1>
						<form action="" className="space-y-4">
							<TextField type="text" placeholder="titre" labelStyle={"text-black"} inputStyle={"bg-transparent border-2 border-gray-600 rounded-lg"} />
							<textarea name="" id="" rows="10" placeholder="contenu" className="border-2 border-gray-800 rounded-lg p-2 w-full"></textarea>
							<input type="file" className="" />
							<Bouton titreBtn="publier" />
						</form>
					</div>

				</section>
				<aside>Formulaire de creation</aside>
			</main>
			<footer>Footer</footer>
		</div>
	)
}

export default Home