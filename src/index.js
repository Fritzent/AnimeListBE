const express = require('express');
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
const cors = require('cors')
const helmet = require('helmet')
dotenv.config();
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())

/* Server handler goes to here */
require('./server')
/* A list of Network Routes goes to here */
require('./routes')(app)

console.log(`Listening on ${process.env.HOST_PORT || 8080}`)
app.listen(process.env.HOST_PORT || 8080);
