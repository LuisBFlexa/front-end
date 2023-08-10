import axios from "axios"

export const photo_url = axios.create({
    baseURL: "http://localhost:3000"
})