import axios from "axios"

const apiClient=axios.create({baseURL:"http://35.237.119.242:5000"})

export default apiClient