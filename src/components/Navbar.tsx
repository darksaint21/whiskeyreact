import {useState}from 'react'
import {Link} from 'react-router-dom'
import button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import {auth, Providers} from '../config/firebase'
function Navbar() {
  const [isVisible, setIsVisible]= useState( false )

  const signOutOnClick = ()=>{
    signOut(auth)
    location.reload();
  }

  const signInOnClick = async () =>{
    const response =await signInWithPopup(auth, Providers.google);
    if ( response.user ){
      location.reload();
    }
  }
  
  const dropDown =() =>{
    
    setIsVisible(!isVisible)
  }
  const clicked= () => {
    setIsVisible(false)
  }

  return (
    <nav className ='flex items-center justify-between flex-wrap bg-amber-600'>
        
        <div className ="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/' className='font-semibold text-xl tracking-tight'>Whiskey Collection</Link> 
        </div>
        <div className ='block'>
          <button
              onClick={dropDown}
              className ="flex items-center px-3 py-2 text-slate-800 border rounded border-slate-800
             hover:text-white hover:border-white ">
              
                <i className ="fas fa-bars"></i>
           </button>
        </div>
        {isVisible ? (
            <div className ="w-full block flex-grow items-center">
                <div className="text-sm lg: flex-grow">
                  <button className="p-3 m-5 bg-slate-800 justify-center">
                    <div>
                      <Link to ='/' onClick = {clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                      text-red-400 hover:text-white mr-4'>
                        Home
                      </Link>
                    </div>
                  </button>
                  <button className="p-3 m-5 bg-slate-800 justify-center">
                    <div>
                      <Link to ='about' onClick = {clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                      text-red-400 hover:text-white mr-4'>
                        About
                      </Link>
                    </div>
                  </button>
                  <button className="p-3 m-5 bg-slate-800 justify-center">
                    <div>
                      <Link to ='dashboard' onClick = {clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                      text-red-400 hover:text-white mr-4'>
                        Dashboard
                      </Link>
                    </div>
                  </button>
                  <button className="p-3 m-5 bg-slate-800 justify-center">
                    <div>
                      <Link to ='contact' onClick = {clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                      text-red-400 hover:text-white mr-4'>
                        Contact
                      </Link>
                    </div>
                  </button>
                  {
                    !auth.currentUser ?

                    <button className ='p-3 m-5 bg-slate-800 justify-center'>
                      <div>
                        <Link to='/' onClick={ () => {signInOnClick()}} className='flex place-items-center mt-4 
                        lg:inline-block lg:mt-0 text-red-400 hover:text-white'>
                        Login
                        </Link>
                      </div>
                    </button>
                    :
                    <button className ='p-3 m-5 bg-slate-800 justify-center'>
                      <div>
                        <Link to='/' onClick={ () => {signOutOnClick()}} className='flex place-items-center mt-4 
                        lg:inline-block lg:mt-0 text-red-400 hover:text-white'>
                       Sign Out
                        </Link>
                      </div>
                    </button>
                  }
                </div>
            </div>
        ):(
        <></>
      )}
        
    </nav>
  )
}

export default Navbar
