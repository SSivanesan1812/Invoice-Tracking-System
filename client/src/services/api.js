import axios from "axios"

export const saveInvoice=async (payload)=>{
    const API_URL="http://localhost:8080"
    try{
        return axios.post(`${API_URL}/invoice`,payload);
    }
    catch(error){
        console.log(error.message);
        return error.response.data;
    }
}

export const getAllInvoice=async()=>{
    const API_URL="http://localhost:8080"
    try{
        return axios.get(`${API_URL}/invoice`);
    }
    catch(error){
        console.log(error.message);
        return error.response.data;
    }
}
export const delteInvoice=async(id)=>{
    const API_URL="http://localhost:8080"
    try{
        return axios.delete(`${API_URL}/invoice/${id}`);
    }
    catch(error){
        console.log(error.message);
        return error.response.data;
    }
}