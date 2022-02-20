const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
 origin: 'https://ruthie-apod.netlify.app',
 optionsSuccessStatus: 200
}

// Rate limiting
const limiter = rateLimit({
 windowMS: 10 * 60 * 1000, //10 minutes
 max: 10
})
app.use(limiter);
app.set('trust proxy', 1)

// Routes
app.use('/api', require('./routes'))

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// add '&count=num' to get that particular count