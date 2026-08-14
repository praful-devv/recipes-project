import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout:5000,
  withCredentials:true
});


api.interceptors.request.use((config)=>{
  console.log('request kiya')
   

  return config
},
(error)=>{
  return Promise.reject(error)
}

)
api.interceptors.response.use((response)=>{
  console.log('response aaya')
 
  return response
},
(error)=>{
  console.log(error)
  return Promise.reject(error)
}

)

export default api