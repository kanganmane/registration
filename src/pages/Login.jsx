import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className='bg-[#161616] w-full h-full flex justify-center items-center'>
      <div className='h-125 w-100 bg-white/5 backdrop-blur-lg border-2 border-white/5 p-10 rounded-2xl flex flex-col gap-6 justify-between '>
          <h1 className='text-2xl'>Welcome Back!
          <p className='text-lg text-gray-400'>Log in to continue.</p></h1>
          <form className='flex flex-col gap-3'>
            <label for='useremail'>Enter email<span className='text-red-500'>*</span><input id='useremail' name='useremail' className='h-8 w-full bg-black/50 rounded-md' /></label>
            <label for='userpass'>Enter password<span className='text-red-500'>*</span><input id='userpass' name='userpass' className='h-8 w-full bg-black/50 rounded-md' /></label>
          </form>
          <div className='gap-2 flex flex-col'>
          <div className='flex flex-row items-center justify-around'>
            <div className='h-1 border-b border-gray-100/20 w-[40%]'></div>
            <p className='text-gray-500'>OR</p>
            <div className='h-1 border-b border-gray-100/20 w-[40%]'></div>
          </div>
          <div className='mybtn gap-1'>
            <img src='https://www.svgrepo.com/show/303108/google-icon-logo.svg' className='h-5'/>
            <p className='text-gray-400'>| Log in with google</p>
          </div>
          </div>
          <Link to='/dashboard'><button className='mybtn cursor-pointer w-full bg-red-500' onClick={()=>{
            setLoggedIn(true);
            toast.success("Logged In Successfully.");
          }}>Log In</button>
          </Link>
      </div>
    </div>
  )
}

export default Login