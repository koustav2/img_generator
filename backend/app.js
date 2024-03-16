require('dotenv').config(".env");
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors({
  credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", require("./openAi/img_generator"))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
