import axiosClient from './axiosClient'

const API_KEY='AIzaSyBQpa-vPyiQBCKiJGzeOGshyAsabRpHOZA'
const authApi = {
    logIn: (data:any) => {
      
      const url = `accounts:signInWithPassword?key=${API_KEY}`;
      
      return  axiosClient.post(url,data);
      
      
    },
    
    
    signUp:(data:any)=>{
      const url = `accounts:signUp?key=${API_KEY}`;
      
      return  axiosClient.post(url,data);
    }
    ,
    changePass:(data:any)=>{
      const url=`accounts:update?key=${API_KEY}`
      return axiosClient.post(url,data)
    }
    
  
   
  }
  
  export default authApi;