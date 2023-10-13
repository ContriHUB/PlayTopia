import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 100000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Saving uses image on cloud storage
async function uploadImage(files) {  
  if(!files) return null
  const file = files.profileImage
  if (file.type === "image/jpeg" || file.type === "image/png") {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ChatApp");     
    data.append("cloud_name", "dl0hkjsah");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dl0hkjsah/image/upload",   //"https://api.cloudinary.com/v1_1/<Cloud_Name>/image/upload
        data
      );
      return res.data.url;   //Link of image for accessing it on cloud
    } 
  else{
    alert("Please select an image file");
  }
}

// public routes

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};



export const register = async (data) => {
  try {
    const image_url = await uploadImage(data.profileImage)
    console.log(image_url) //Uploadation of image on 'cloudinary' cloud storage
    const new_data = {          //New data file for including image url
      username: data.username,
      password: data.password,
      email: data.email,
      profileImage: image_url? image_url :null,
    }
    return await apiClient.post("/auth/register", new_data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes
export const sendFriendInvitation = async (data) => {
  try {

    return await apiClient.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
