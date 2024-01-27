import React from 'react'
import { Link } from 'react-router-dom'

const Error404= ()=> {
  return (
    <section className="w-full flex flex-col justify-center items-centerz lg:h-screen h-lvh gap-4">
            <p className="text-6xl text-rose-700 font-bold text-center">404</p>
            <div className="four_zero_four_bg bg-center h-[400px]"></div>
            <div className="flex flex-col w-full items-center text-center gap-8">
                <div>
                    <p className="text-lg font-semibold tracking-wide">Look like you're lost</p>
                    <p className='text-lg font-semibold'>the page you are looking for not avaible!</p>
                </div>
                <Link to="/" className="rounded-3xl bg-rose-700 px-6 py-3 text-white font-bold">Go to Home</Link>
            </div>
    </section>
  )
}

export default Error404
