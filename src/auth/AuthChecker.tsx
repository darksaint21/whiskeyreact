import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'
import {auth, Providers} from '../config/firebase'
interface Props{
    children: React.ReactNode;
}
const AuthChecker = ({ children }: Props) => {
    const navigate =useNavigate();
    //this will just check if the user is logged in if so it returns the children
    //which are passed as props its just whatever componet is either protected 
    //or not other wise it sends them to hte login route 
    useEffect(()=>{
        if (!auth.currentUser){
            navigate('../')
            signInWithPopup(auth, Providers.google)
        }
    }, [])
  return (
    <>{children}</>
  )
}

export default AuthChecker