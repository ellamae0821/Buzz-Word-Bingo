/*jshint esversion:6*/

let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let totalPoints = 0;
let buzzWordsArray = [];
let buzzWordObj = {"buzzWords": buzzWordsArray };
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index');
});


app.get('/buzzwords', (req, res) => {
  res.json(buzzWordsArray);
});



app.post('/buzzword', ( req, res ) => {
  buzzWordsArray.push(req.body);
  console.log("buzzWordsArray : ", buzzWordsArray);
  req.body.heard = false;
  req.body.points = Number(req.body.points);
  res.json( { "success": true } );
  console.log(buzzWordsArray.length);
});


let totalScore = 0;

app.put('/buzzword', (req, res) => {
  for (let i=0; i< buzzWordsArray.length; i++){
    if(req.body.buzzWord === buzzWordsArray[i].buzzWord){
      console.log('buzzWordsArray[i]: ',buzzWordsArray[i].buzzWord);
      buzzWordsArray[i].heard = req.body.heard;
      totalScore += buzzWordsArray[i].points;
      res.send( `Yeay! Word has been heard \n Total Score: ${totalScore}` );
    }
  }
  res.send("Try again, next word!" );
});



app.delete('/buzzword', (req, res) => {
  for (let i=0; i< buzzWordsArray.length; i++){
    if(req.body.buzzWord === buzzWordsArray[i].buzzWord){
      buzzWordsArray.splice(i, 1);
      res.json( { "success": true } );
    }
  }
});


app.post('/reset', (req, res) => {
  totalScore = 0;
  buzzWordsArray = [];
  res.json( { "success": true } );
});



app.listen(PORT, (err) =>{
  console.log('Server running on port:' + PORT);
});