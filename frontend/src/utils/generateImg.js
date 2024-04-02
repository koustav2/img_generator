import axios from "axios";


const generateImg = async (prompt) => {
    // Return axios post request as Promise
    try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/generate-image`,
      { prompt }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw to make sure Promise ends up in 'rejected' state
  }
  };

export default generateImg;