import React from 'react'
import Card from './Card'
import Bigcard from './bigcard'
import { useEffect, useState } from 'react';
import SearchIcon from '../src/search.svg';
import '../src/index.css';


const API_URL = "http://www.omdbapi.com?apikey=21c03aff";


function Main() {
    const [Movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const SearchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };
    const Movie1 = {
        "Title": "Spider-Man: No Way Home",
        "Year": "1980",
        "imdbID": "tt0081573",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
        "Plot": "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones."
      };

    useEffect(() => {
        SearchMovie("Spider-man");

    }, []);
    return (
        <div>
            <div className='flex '>
                <div className='w-52 h-screen  hidden sm:block  bg-gray-100'>
                    <h3 className='text-2xl font-italics font-extrabold text-center mt-4'>Movie<span className='text-red-700'>F</span>inder</h3>
                    <div className=''>
                        <div className='mx-1'>
                            <h1 className='font-extrabold my-3'>Categories</h1>
                            <div className='mx-2'>
                                <div className='flex mb-7 ' >
                                    <div className='mr-5 ' >
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
                                    </div>
                                    Popular
                                </div>
                                <div className='flex my-7 bg-green-200'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                    </div>
                                    Top rated
                                </div>
                                <div>
                                    <div className='flex my-7 '>
                                        <div className='mr-5 '>
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        </div>
                                        Upcoming
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-extrabold'>Genre</h1>
                            <div className='mx-2'>
                                <div className='flex mt-2 mb-7'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                                    </div>
                                    Action
                                </div>
                                <div className='flex my-7'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                                    </div>
                                    Adventure
                                </div>
                                <div className='flex my-7'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                                    </div>
                                    Animation
                                </div>
                                <div className='flex my-7'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                                    </div>
                                    Comedy
                                </div>
                                <div className='flex my-7'>
                                    <div className='mr-5 '>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                                    </div>
                                    Crime
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-screen '>
                    <div className='w-full h-20 bg-blue-500 '>
                        <div className='flex justify-between py-5 px-8'>
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <div className='flex bg-blue-500 rounded-xl w-60 h-10'>
                                <input type="text" placeholder='Search'
                                    className='placeholder-white bg-blue-500 cursor-pointer w-60 h-10 mb-3 rounded-xl  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                                    value={searchTerm}
                                    onChange={(e) => setsearchTerm(e.target.value)} />
                                <img src={SearchIcon} alt="search" onClick={() => SearchMovie(searchTerm)} />
                            </div>
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                    <div className='mx-3'>
                        <Bigcard Movie1={Movie1}/>
                    </div>
                    <div className='px-7 pt-6 sm:py-4 sm:px-4  '>
                        {
                            Movies?.length > 0
                                ? (
                                    <div className='flex flex-wrap '>
                                        {Movies.map((movie) => (
                                            <Card movie={movie} />
                                        ))}
                                    </div>

                                ) : (
                                    <div className='text-center my-44'>
                                        <h2 className='text-3xl'>No movies found</h2>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
            

        
    );
}

export default Main