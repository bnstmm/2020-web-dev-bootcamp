const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const https = require("https");

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us7.api.mailchimp.com/3.0/lists/744b2500fb";

    const options = {
        method: "POST",
        auth: "user:69666abc014268e056c4fdaa60af51c6-us7",
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }   
        else {
            res.sendFile(__dirname + "/failure.html");
        }  

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

// API Key
// 69666abc014268e056c4fdaa60af51c6-us7

// List ID
// 744b2500fb