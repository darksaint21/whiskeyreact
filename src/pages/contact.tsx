import React from 'react'
import Background from '../assets/images/therocks.jpg'

function contact() {
  return (

    <div 
  style={{backgroundImage:`url(${Background})`}} 
  className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
     <div className="flex place-items-center h-screen">
     <h3 className='p-4 flex flex-col bg-slate-800 bg-opacity-50 text text-emerald-400 rounded mb-80'>
      Contact: contact@contact.com <br></br>Phone Number: 123-456-7890</h3>
      
     
      </div>
    
  </div>
    
  )
}

export default contact