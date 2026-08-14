import api from "../utils/axios";


export const getRecipe  = () =>{

     return api.get("/recipes?limit=50");

}
export const postRecipe  = (data) =>{

     return api.post("/recipes/add",data);

}

export const upDate = (data,id) =>{
  return  api.put(`/recipes/${id}`,data); 
}