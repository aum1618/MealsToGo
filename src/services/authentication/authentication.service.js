import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest=(email,password)=>{
   return signInWithEmailAndPassword(getAuth(),email,password)
}