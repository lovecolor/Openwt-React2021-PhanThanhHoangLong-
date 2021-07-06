import axiosClient from './axiosClient'


const commentApi = {
    getAllById: (id:String) => {
    
      const url = `comments/${id}.json`;
      
      return  axiosClient.get(url);
      
      
    },
    add:(data:any)=>{
      const url = `comments/${data.id}.json`;
      
      return  axiosClient.post(url,data.commentData);
    }
    ,
    
  
   
  }
  
  export default commentApi;