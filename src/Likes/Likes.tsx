import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './Likes.css'

interface Props {
    ogLike: boolean
}
const Likes: React.FC<Props> = ({ ogLike }) => {    // declares the type as a functional component which is limited by Props. It also destructures ogLike

    const [liked, setLiked] = useState<boolean>(ogLike)     // 

    const handleClick = () => {
        if (liked) {
            console.log('unliked')
        } else {
            console.log('liked')
        }
        setLiked(!liked)    // nagates value of liked. onClick, true becomes false, false becomes true.
    }

    return (
        <>
            <button onClick={handleClick} className='likeBtn'>
                {liked ? <FaHeart color='red' /> : <FaRegHeart />}
            </button>
        </>
    )
}
export default Likes