
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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
            pass: 'Ce2e79a9b'
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: 'websitecontact@mylesrangel.com',
        to: 'myles@mylesrangel.com',
        html: "<div>" 
                   +"<p>First Name: " + `${req.body.firstName}` + "</p>"
                   +"<p>Last Name: " + `${req.body.lastName}` + "</p>"
                   +"<p>Email: " + `${req.body.email}` + "</p>"
                   +"<p>Message: " + `${req.body.message}`+ "</p>" +
                "</div>"
    };

    transporter.sendMail(mailOptions, function (err, res){
        if(err){
            console.error('there was an error: ', err);
            res.json({success: false });
        }else{
            console.log('here is the res: ', res);
            res.json({ message: "It worked!"});
           
        }
    });
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.email);
    // console.log(req.body.subject);
    // console.log(req.body.message);
    // console.log("test post");

    
});

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
});