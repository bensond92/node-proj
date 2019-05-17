const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) =>{
    res.send("<h1>Hello NodeJs</h1>");
});

app.listen(process.env.PORT,() =>{
    console.log('Server initialized! on '+process.env.PORT);
})

