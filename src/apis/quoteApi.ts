import axiosClient from './axiosClient'


const quoteApi = {
    getAll: () => {
    
      const url = 'quotes.json';
      
      return  axiosClient.get(url);
      
      
    },
    addQuote:(data:any)=>{
      const url = 'quotes.json';
      
      return  axiosClient.post(url,data);
    }
    ,
    getById:(id:String)=>{
      const url = `quotes/${id}.json`;
      
      return  axiosClient.get(url);
    }
  
   
  }
  
  export default quoteApi;