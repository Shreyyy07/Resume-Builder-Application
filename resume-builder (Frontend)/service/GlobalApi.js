import axios from "axios";
// import { Delete } from "lucide-react";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
// console.log([resumeId]);
const axiosClient=axios.create({
  baseURL:'http://localhost:1337/api/',
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${API_KEY}`
  }  
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes ',data)

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export const GetResumeById = (id) => {
  return axios.get(`http://localhost:1337/api/user-resumes/${id}?populate=*`);
}

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}