import React, { useEffect, useState } from 'react'
import {ref, listAll, getDownloadURL} from 'firebase/storage'
import { storage } from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const Dashboard = ()=> {

  const imageListRef = ref(storage, '/images');
  const [imageList,setImageList] = useState([]);
  const [myUser, setUser] = useState();

  useEffect(()=>{
  // .cath((err)=>{alert("Error:",err)});
   
   onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);
        console.log('User is logged in',user);
      // ...
    } else {
      console.log('No user found');
      // ...
    }
  });
  })

  useEffect(()=>{
    listAll(imageListRef).then((value)=>{
      value.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
            setImageList((prev)=> [...prev, url]);
        });
      })
    
    })
  },[])

  console.log("user", myUser);
  console.log('list', imageList);

  return (
    <div className='flex flex-col justify-center items-center gap-12  h-screen py-12'>
    <div className='max-h-[10vh]'>
        <p className=' text-3xl font-bold text-rose-600 '>Dashboard</p>
       {myUser && <p className=' text-xs text-gray-500'>Logged in as: {myUser.email}</p>}
      </div>
      <div className=' flex flex-row justify-center items-center gap-5 w-full'>
        {imageList.map((url,index)=>{
          return <div className='p-3'><img className=' w-96 ' src={url} alt='prescription' /></div>
        })}
      </div>

    </div>
  )
}

export  default Dashboard;