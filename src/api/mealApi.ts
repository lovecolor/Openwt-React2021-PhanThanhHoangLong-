import axiosClient from './axiosClient'


const mealApi = {
    getAll: () => {
    
      const url = 'meals.json';
      
      return  axiosClient.get(url);
      
      
    },
  
   
  }
  
  export default mealApi;