import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import profile from '../../assets/img/profile.png'
import Bouton from '../../components/Bouton';

function Detail() {
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    },[id]);
    if(!post){
        return <div>
            <svg className="animate-spin h-5 w-5 mr-3 text-red-800" viewBox="0 0 24 24"></svg>
        </div>
    }
  return (
    <div className='container ml-20'>
        <img className='w-full h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarR9Ga4_V4LrhdFJ40Pzegv1WhiwLFHAj9Q&usqp=CAU" alt="" />
        <div className='text-3xl font-bold py-3'>
            {post.title}
        </div>
        <div className='text-md text-gray-600 py-2'>
           {post.body}
        </div>
        <div className='grid grid-cols-3'>
            <div className='flex flex-row gap-2'>
                <img src={profile} width={"30px"} alt="" />
                <h5>Mamadou Bhoye N'diaye</h5>
            </div>
            <div>
                <span className='text-gray-500'>14/08/2023</span>
            </div>
            <div>
                <span className='text-gray-500'>likes</span>
            </div>
        </div>
        <div className='flex flex-col py-5'>
            <h1 className='text-xl font-bold py-3'>Commentaires:</h1>
            <div className='flex flex-row justify-between'>
                <div className='flex items-center space-x-2'>
                    <img src={profile} width="30px" alt="" />
                    <span>Mamadou Bhoye N'diaye</span>
                </div>
                <div className='text-sm text-gray-500'>Date: 14/13/2023</div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores aliquid tempora eaque. Distinctio quo nihil magnam, quas velit doloremque, asperiores atque id tenetur error fugit pariatur?</p>
            <textarea className='pl-2 my-3 border rounded-lg' placeholder='Commenter' name="" id="" cols="30" rows="2"></textarea>
            <Bouton titreBtn="Commenter" onClick={()=>{}}/>
        </div>
    </div>
  )
}

export default Detail