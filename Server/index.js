
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const config = require('./config.js');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser()); //depreciated

app.get('/', (req, res) =>{
    res.json({
        message: "in /"
    });
});

app.post('/sendemail', (req, res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.stackmail.com',
        secure: true,
        port: '465',
        auth:{
            user: 'websitecontact@mylesrangel.com',
            pass: 'KU3$j2a!W'
        },
        tls:{
            rejectUnauthorized: false
        }
    });
     
    
    const mailOptions = {
        from: 'websitecontact@mylesrangel.com',
        to: 'myles@mylesrangel.com',
        subject: `${req.body.subject}`,
        html: "<div>" 
                   +"<p>First Name: " + `${req.body.firstName}` + "</p>"
                   +"<p>Last Name: " + `${req.body.lastName}` + "</p>"
                   +"<p>Email: " + `${req.body.email}` + "</p>"
                   +"<p>Subject: " + `${req.body.subject}` + "</p>"
                   +"<p>Message: " + `${req.body.message}`+ "</p>" +
                "</div>"
    };

   if(transporter.sendMail(mailOptions)){
        //sends the 200 status code
        res.json();
   }
   res.end();
});

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
});