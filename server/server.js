const express = require("express");
const cocktailRoutes = require("./routes/cocktailRoutes")
const cors = require("cors")

require('dotenv').config();

// Create Express app
const app = express();
const port = process.env.SERVER_PORT;

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
const allowedMethods = process.env.ALLOWED_METHODS;

// CORS configuration
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('This origin is not allowed by CORS'));
        }
    },
    methods: allowedMethods,
};

app.use(cors(corsOptions));
app.use("/api", cocktailRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
