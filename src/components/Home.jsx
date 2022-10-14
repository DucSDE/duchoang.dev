import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { scroller } from 'react-scroll';
const Home = () => {
    const scrollTo = (e) => {
        scroller.scrollTo(e, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600  text-2xl'>Hi, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    DUC HOANG
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Software Engineer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>
                    I’m a Fresher Software Engineer.<br />
                    This is my Portfolio from now after leave the university ~.~ #<br />
                </p>
                <div className='flex flex-row'>
                    <button onClick={() => scrollTo('about')}
                        className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' >
                        About me
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                    <button onClick={() => scrollTo('skills')} 
                            className='text-white group border-2 px-6 py-3 my-2 ml-2 flex items-center
                             hover:bg-pink-600 hover:border-pink-600' >
                        My Skills
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                    <button onClick={() => scrollTo('work')} 
                            className='text-white group border-2 px-6 py-3 my-2 ml-2 flex items-center
                            hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                    <button onClick={() => scrollTo('contact')} 
                            className='text-white group border-2 px-6 py-3 my-2 ml-2 flex items-center
                            hover:bg-pink-600 hover:border-pink-600'>
                        Contact me
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Home;