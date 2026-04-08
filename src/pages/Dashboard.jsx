import React from 'react'
import { useLocation } from 'react-router-dom';
const Dashboard = () => {
  const location = useLocation();
  const firstName = location.state?.firstName;
  const lastName = location.state?.lastName;
  return (
    <div className=' w-full h-full flex items-center text-4xl text-black justify-center bg-[#f2f2f2]'>Welcome to Dashboard, {firstName} {lastName}!</div>
  )
}

export default Dashboard