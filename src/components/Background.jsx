import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
       <div className='absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-600 text-xl '>Documents.</div>
       <h1 className='text-zinc-900 absolute text-[15vw] top-1/2 left-1/2 font-semibold -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter'>Docs.</h1>
    </div>
    </>
  )
}

export default Background;