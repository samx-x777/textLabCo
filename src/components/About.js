import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="container w-full h-[500px] flex justify-center items-center">
                    <div className={`sub-container w-[800px] h-80 flex flex-col justify-center gap-5 ${ props.mode === 'black' ? 'text-white' : 'text-black'}`}>
                    <div className="titlex w-96 h-20">
                        <p className='text-5xl font-medium'>
                            About
                        </p>
                        </div>
                        <div className="text-aboutx w-[750px] h-56 flex flex-col gap-2 text-xl">
                            <p>
                            At TextLabCo, our mission is to create a vibrant community where creativity thrives, and the love for reading and writing is nurtured. We aim to provide a space where aspiring and established writers can hone their craft, share their work, and connect with a supportive audience. For readers, we offer a curated selection of engaging content to inspire, entertain, and inform.
                            </p>
                            <p>
                            Join TextLabCo today and become part of a community that values the magic of words and the joy they bring. Together, let's explore new horizons in the world of reading and writing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
