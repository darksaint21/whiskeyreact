import React from 'react'
import Background from "../assets/images/barrel.jpg"



function Home() {
  return (
    <div 
    style={{backgroundImage:`url(${Background})`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
       <div className="flex place-items-center h-screen">
       <h3 className='p-5 bg-red-300 bg-opacity-50 text text-purple-900 rounded mb-80 '>Your Whiskey Collection</h3>
       
        </div>
      
    </div>
  )
}

export default Home