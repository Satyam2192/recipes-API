const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000; // Use 3000 as default if PORT is not defined

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json({ limit: '50mb' })); // Use express.json() middleware with limit
app.use(cookieParser());

require("./config/database").connect();

// Routes import and mount
const user = require("./routes/user");
const recipes = require("./routes/recipes");

app.use("/api/v1", user);
app.use("/api/v1", recipes); // Mount the recipes route

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
