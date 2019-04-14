
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

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
    console.log(req.body.firstName);
    console.log("test post");
    res.end();
    
});

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
});