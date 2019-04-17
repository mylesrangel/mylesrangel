
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
        //service: 'smtp.stackmail.com',
        host: 'smtp.stackmail.com',
        secure: true,
        port: '465',
        auth:{
            user: 'websitecontact@mylesrangel.com',
            pass: 'Ce2e79a9b'
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: 'websitecontact@mylesrangel.com',
        to: 'myles@mylesrangel.com',
        firstName: `${req.body.firstName}`,
        lastName: `${req.body.lastName}`,
        subject: `${req.body.subject}`,
        message: `${req.body.message}`,
        replyto: `${req.body.email}`
    };

    // transporter.verify(function(error,success){
    //     if(error){
    //         console.log(error);
    //     }else{
    //         console.log("Server is ready for greatness...");
    //     }
    // });

    transporter.sendMail(mailOptions, function (err, res){
        if(err){
            console.error('there was an error: ', err);
        }else{
            console.log('here is the res: ', res);
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