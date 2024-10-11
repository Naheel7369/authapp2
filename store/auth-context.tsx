import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



 export const AuthContext = createContext({
    token:'',
    isAuthenticated:false,
    authenticate:(token:any)=>{},
    logout:() => {},
 });

 function AuthContextprovider({children}: any){
 const [authToken,setAuthToken]=useState();



 function authenticate(token){
    setAuthToken(token);
    AsyncStorage.setItem('token',token );
 }

 function logout(){
    setAuthToken(null);
    AsyncStorage.removeItem('token');
 }

 const value:any ={
    token:authToken,
    isAuthenticated:!!authToken,
    authenticate:authenticate,
    logout:logout
 };

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
 }

 export default AuthContextprovider;
 