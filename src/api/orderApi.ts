import axiosClient from './axiosClient'
import firestore from '@react-native-firebase/firestore'

const orderApi = {
    post: (data:any) => {
    
      const url = 'orders.json';
      
      return  axiosClient.post(url,data);
      
      
    },
  
   
  }
  
  export default orderApi;