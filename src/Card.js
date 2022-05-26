import React from 'react'

function Card({movie}) {
    return (
        <div className=' sm:mx-3 flex flex-wrap'>
            <div>
                <img src={movie.Poster} alt="" className='w-32 h-44 sm:w-44 sm:h-60   mx-3 my-2 rounded-xl hover:scale-110 transition-all delay-50 ease-in-out' />
            <div className='text-center w-32 text-sm   sm:w-44 sm:text-base '>{movie.Title}</div>
            <div className='text-center text-sm w-32 sm:w-44 sm:text-base'>{movie.Year} </div>
            </div>
            
           
        </div>
    )
}

export default Card;