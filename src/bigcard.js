import React from 'react';

function Bigcard({Movie1}) {
    return (
        <div>
            <div className='w-full h-52 bg-gray-500'>
                <img src={Movie1.Poster} alt="water" className='object-cover w-full h-52'/>
                <div className='relative -top-28 sm:-top-20 z-30 px-3 text-white '>
                    <h1 className='text-lg sm:text-xl'>{Movie1.Title}</h1>
                    <article className='text-sm sm:text-lg'>{Movie1.Plot}</article>
                </div>

            </div>
        </div>
    )
}

export default Bigcard;