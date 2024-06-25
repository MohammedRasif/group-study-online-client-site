import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(null)


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   
    
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      const logOut = async () => {
        setLoading(true)
        return signOut(auth)
      }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            //console.log('current user',currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe
        }
    },[])


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }


    
  // onAuthStateChange
  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email:userEmail};

      setUser(currentUser)
       //console.log('CurrentUser-->', currentUser)
      setLoading(false);
      if (currentUser){
        axios.post('https://study-server-site.vercel.app/jwt',loggedUser , {
          withCredentials:true })
        .then(res => {
           //console.log('token response',res.data)
        })
      }
      else{
        axios.post('https://study-server-site.vercel.app/logout',loggedUser ,{
          withCredentials:true
        })
        .then(res => {
           //console.log(res.data)
        })
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])













    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        setUser,
        setLoading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;