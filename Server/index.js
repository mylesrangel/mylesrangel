
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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
            pass: 'CE32WWTR4'
        },
        tls:{
            rejectUnauthorized: false
        }
    });
     
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.email);
    // console.log(req.body.subject);
    // console.log(req.body.message);
    // console.log("test post");
    res.end();
    
});

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
});