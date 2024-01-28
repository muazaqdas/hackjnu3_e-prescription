import React from 'react'

const  Navber =({isLogin})=> {

  const logout = ()=>{
  }

  return (
    <div className='flex items-center w-full px-6 md:px-16 py-6 shadow-md rounded-b-3xl justify-between'>
      <p className='font-bold text-lg text-amber-400'>E-prescription</p>
      {!isLogin &&
        <button onClick={logout} className='bg-rose-200 rounded-full px-4 py-2 font-bold text-white'>
          Log Out
        </button>
        }
    </div>
  );
};

export default Navber;
