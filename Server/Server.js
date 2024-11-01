const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get("/hello" , (req , res) => {
    res.status(200).json({message: 
        "hello world"
    })
});


app.get("/valid" , (req , res) => {
    const email = req.query.email;

    const userEmail = "aws.anu.co@gmail.com";

    if(email !== userEmail) {
        res.status(401).json({message: "mistatched email address"});

    }else{
        res.send("Congratulations email is right u can proceed with this email address")
    }

})

app.listen(5000, () => {
    console.log("listenon port 5000")
});