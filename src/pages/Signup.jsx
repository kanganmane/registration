import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='bg-[#161616] w-full h-full flex justify-center items-center'>
      <div className=' w-100 bg-white/5 backdrop-blur-lg border-2 border-white/5 p-10 rounded-2xl flex flex-col gap-6 justify-between '>
          <h1 className='text-2xl'>Welcome!
          <p className='text-lg text-gray-400'>Sign up to continue.</p></h1>
          <form className='flex flex-col gap-3'>
            <div className='flex flex-row gap-6'>
              <label for='firstname'> First Name<span className='text-red-500'>*</span><input id='firstname' name='firstname' placeholder='First Name' className='h-8 w-full bg-black/50 rounded-md p-2' /></label>
              <label for='lastname'> Last Name<span className='text-red-500'>*</span><input id='lastname' name='lastname' placeholder='Last Name' className='h-8 p-2 w-full bg-black/50 rounded-md' /></label>
            </div>
            <label for='useremail'>Enter email<span className='text-red-500'>*</span><input id='useremail' name='useremail' placeholder='Email' className='h-8 p-2 w-full bg-black/50 rounded-md' /></label>
            <label for='userpass'>Enter password<span className='text-red-500'>*</span><input id='userpass' name='userpass' placeholder='Password' className='h-8 p-2 w-full bg-black/50 rounded-md' /></label>
            <label for='confirmpass'>Confirm password<span className='text-red-500'>*</span><input id='confirmpass' name='confirmpass' placeholder='Confirm Password' className='h-8 p-2 w-full bg-black/50 rounded-md' /></label>
          </form>
          <div className='gap-2 flex flex-col'>
          <div className='flex flex-row items-center justify-around'>
            <div className='h-1 border-b border-gray-100/20 w-[40%]'></div>
            <p className='text-gray-500'>OR</p>
            <div className='h-1 border-b border-gray-100/20 w-[40%]'></div>
          </div>
          <div className='mybtn gap-1'>
            <img src='https://www.svgrepo.com/show/303108/google-icon-logo.svg' className='h-5'/>
            <p className='text-gray-400'>| Sign up with google</p>
          </div>
          </div>
          <Link to='/dashboard'><button className='mybtn cursor-pointer w-full bg-red-500' onClick={()=>{
            setLoggedIn(true);
            toast.success("Registered Successfully.");
          }}>Sign Up</button>
          </Link>
      </div>
    </div>
  )
}

export default Signup
