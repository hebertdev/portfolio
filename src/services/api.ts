import { axiosInstanceBackend } from "helpers/axios"

//interfaces
import { Blog } from "interfaces/blog";
import { Contact } from "interfaces/contact";


export async function getPosts(){
    const {data} = await axiosInstanceBackend.get<Blog>('/blog/')
    return data
}

export async function sendContact(contact:Contact){
    const { data } = await axiosInstanceBackend.post("/contact/", contact);
    return data;
}