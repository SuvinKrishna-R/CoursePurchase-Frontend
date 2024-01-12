import { commonStructure } from "./commonRequest";
import { BASE_URL } from "./baseUrl";


export const addCourseApi=async(body,header)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/add/courses`,body,header)
}

//get course

export const getCourseApi=async()=>{
    return await commonStructure('GET',`${BASE_URL}/user/courses`,'')
}

// register
export const userRegisterApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/user/register`,body)
}

//user Login
export const userLoginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/user/login`,body)
} 

//admin login
export const adminLoginApi=async(body)=>{ 
    return await commonStructure("POST",`${BASE_URL}/admin/login`,body)
}

// single view
export const getSingleView=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/user/courses/singleview/${id}`,'')
}

// feedback 
export const feedbackApi=async(body)=>{ 
    return await commonStructure("POST",`${BASE_URL}/user/courses/feedback`,body)
}

// get feedback
export const getFeedbackApi=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/user/courses/feedback/${id}`,'')
}