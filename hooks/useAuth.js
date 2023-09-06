import { View, Text } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function useAuth() {
    const [user, setUser] = useState("");

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user)=>{
            console.log(user)
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        })
        return unsub;
    }, [])
    
  return {user}
}