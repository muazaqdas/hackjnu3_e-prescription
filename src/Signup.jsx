import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase/firebase'
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupUser = (e)=>{
      e.preventDefault();
        createUserWithEmailAndPassword(
            auth,email,password).then((value)=> console.log(value));
    }
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-rose-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div className="text-3xl text-rose-500 tracking-wide ml-2 font-bold">E-Prescription</div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-rose-800 font-display font-bold lg:text-left xl:text-5xl xl:text-bold">Sign Up</h2>
                <div className="mt-12">
                <form>
                  <div>
                      <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-rose-500" type="" placeholder="mike@gmail.com"/>
                  </div>
                  <div className="mt-8">
                      <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                              Password
                          </div>
                      </div>
                      <input  onChange={(e)=>{setPassword(e.target.value)}} value={password} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-rose-500" type="" placeholder="Enter your password"/>
                  </div>
                  <div className="mt-10">
                      <button onClick={signupUser} className="bg-rose-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-rose-600
                      shadow-lg">
                          Sign Up
                      </button>
                  </div>
                </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                         Have an account ? <Link to='/login' className="cursor-pointer text-rose-600 hover:text-rose-800">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-rose-100 flex-1 h-screen">
            <div className="max-w-lg transform duration-200 hover:scale-110 cursor-pointer">
                <img src='/images/login.png' alt='healthcare'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
