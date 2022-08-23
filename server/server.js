const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs')
const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/addDatatojson',(req,res)=>{
    let resumeDetails = req.body
    const jsonString = JSON.stringify(resumeDetails);
    fs.writeFileSync('./newResume.json', jsonString)
    res.send({message:'Successfully wrote file',data:jsonString})
})

app.get('/getDatafromfile',(req,res)=>{
    fs.readFile("./newResume.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        res.send(jsonString)
      });
})

app.listen(port, () => console.log(`Server started on port ${port}`));