const express = require('express');
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
const cors = require('cors')
const helmet = require('helmet')
dotenv.config();
const app = express();
const db = require("./models");

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(helmet())

//Connecting to DB
// db.mongoose.connect(process.env.MONGO_URL,
//     {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> console.log("Connected to Database"))
//     .catch(err => {
//         console.log("Cannot connect to Database", err);
//         process.exit();
// });


require('./server')
/*A list of Network Routes goes to Here*/
require('./routes')(app)

console.log(`Listening on ${process.env.HOST_PORT || 8080}`)
app.listen(process.env.HOST_PORT || 8080);
