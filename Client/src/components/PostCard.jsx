import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {
    const { title, body, id, image, userName, userImage, likes } = props
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <div className='flex flex-col space-x-1 w-72 border rounded-3xl p-1'>
                    <img className='w-full h-48 rounded-3xl' src={image} alt="" />
                    <h3 className='font-bold text-sm py-1'>{title}</h3>
                    <div className='flex flex-row'>
                        <div className='flex flex-row items-center space-x-2 justify-between'>
                            <img className='' width="30px" src={userImage} alt="profile" />
                            <h5 className='font-bold text-xs'>{userName}</h5>
                        </div>
                        <div>
                            <span className='text-xs text-gray-400'>date: 14/08/2023</span>
                        </div>
                    </div>
                    <p className='text-sm text-gray-800'>{body}</p>
                    <button className='underline mb-3 font-bold'>View post</button>
                </div>
            </Link>
        </div>

    )
}

export default PostCard