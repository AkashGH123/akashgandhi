import axios from "axios"

const apiClient=axios.create({baseURL:"http://35.237.119.242:8000"})

export default apiClient