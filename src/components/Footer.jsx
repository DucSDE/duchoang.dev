import React from 'react'

const Footer = () => {
    return (

        <footer className="p-4 shadow md:px-6 md:py-8 dark:bg-gray-900 bg-[#0a192f] sm:mx-auto ">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-xl text-gray-300 sm:text-center dark:text-gray-400 justify-center items-center text-center">
                © 2022 <a href="https://duchoang.dev/" className="hover:underline">Duc Hoang Dev ™</a>
            </span>
            <span className="block text-xl text-gray-300 sm:text-center dark:text-gray-400 justify-center items-center text-center py-2" > 
                Inspiration: <a href="https://www.youtube.com/watch?v=2kg0z1qNrkw/" className="hover:underline" >  Code Commerce </a>
            </span>
            <span className="block text-xl text-gray-300 sm:text-center dark:text-gray-400 justify-center items-center text-center py-2" > 
                Power by: <a href="https://reactjs.org/" className="hover:underline" >  React JS </a> & <a href="https://reactjs.org/" className="hover:underline" >  Tailwind CSS </a>
            </span>
        </footer>
    )
}

export default Footer