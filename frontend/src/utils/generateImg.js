/* eslint-disable no-unused-vars */
import axios from "axios";

const Backend_url = ""
const generateImg = async (prompt) => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/logout`, { prompt: prompt }, { withCredentials: true })
}

export default generateImg