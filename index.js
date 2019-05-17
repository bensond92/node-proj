const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/bmical.html");
});
/*
    BMI weight ranges

    Less than 18.5 = Underweight
    Between 18.5 - 24.9 = Healthy Weight
    Between 25 - 29.9 = Overweight
    Over 30 = Obese

*/
app.post('/calulatebmi',(req,res) =>{ 
    var finalBmi;
    var resultStr;

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    if(weight > 0 && height > 0) {
        finalBmi = weight / (height * height);

        if(finalBmi.toFixed(2) < 18.5){
            resultStr = "Underweight";
        }
        if(finalBmi.toFixed(2) > 18.5  &&  finalBmi.toFixed(2) < 24.9 ){
            resultStr = " Healthy Weight";
        }
        if(finalBmi.toFixed(2) > 25  &&  finalBmi.toFixed(2) < 29.9 ){
            resultStr = "Overweight";
        }
        if(finalBmi.toFixed(2) > 30){
            resultStr = " Obese ";
        }
        res.send("<h2>Your BMI Result is : " + finalBmi.toFixed(2) + " and you are in the "+ resultStr +" range </h2>");

    }else{
        res.send("Invalid inputs!");
    }  
});

app.listen(process.env.PORT,() =>{
    console.log('Server initialized! on '+process.env.PORT);
})

