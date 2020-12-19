const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3500, function () {
    console.log("calculator server listening on port 3500")
});

//Addition Calculator        
app.get("/", function (req, res) {         //get function for calculator opens on localhost:3500/ which is same as localhost:3500
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {

    var numb1 = Number(req.body.number1);     // request.body requests for the body content of input name "number1 in the html and passes it the variable numb1
    var numb2 = Number(req.body.number2);     //it extracts the content as text, so we use Number to change it to a number.
    var answer = numb1 + numb2;

    res.send("The solution is " + answer);    //response is to send the posted result result to the variable answer 

});

//BMI Calculator
app.get("/bmiCalculator", function (req, res) {     // will open on localhost:3500/bmiCalculator
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function (req, res) {

    var bodyWeight = Number(req.body.weight);
    var bodyHeight = Number(req.body.height);

    var BMI = bodyWeight / (bodyHeight * bodyHeight);
    
    if (BMI <= 18.5) {
        res.send("Your BMI is " + BMI + ". You are underweight");
    }

    else if (BMI > 18.5 && BMI <= 24.9) {
        res.send("Your BMI is " + BMI + ". You are normal weight");
    }
    else if(BMI >= 25){
        res.send("Your BMI is " + BMI + ". You are overweight");
    }
});

//comment is for git branch bmiCalculator