import axios from "axios";


const generateImg = (prompt) => {
    // Return axios post request as Promise
    return axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/generate-image`,
        { prompt }
      )
      .then(response => response.data) 
      .catch(err => {
        console.error(err);
        throw err; // Re-throw to make sure Promise ends up in 'rejected' state
      });
  };

export default generateImg;