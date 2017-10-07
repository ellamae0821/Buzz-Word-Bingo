/*jshint esversion:6*/

let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let totalPoints = 0;
let buzzWordsArray = [];
let buzzWordObj = {"buzzWords": buzzWordsArray };
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index');
});


app.get('/buzzwords', (req, res) => {
  res.json(buzzWordObj);
});


/*app.post('/buzzword', (req, res) => {
  let buzzword = req.body;
  console.log(req.body);
  if(checkAvailability(req.body.buzzWords.buzzWordsArray, buzzword)){
    req.body.heard = false;
    req.body.score = Number(req.body.score);
    buzzWordObj.buzzWords.buzzWordsArray.push(req.body.buzzWord);
    res.json({success: true});
  }else{
    res.status(400).end('Error: Word already heard');
  }
});*/

function checkAvailability(arr, val){
  return arr.some(function(arrVal){
    return val === arrVal;
  });
}

/*function checkPost (body) {
  let checkAvailability = buzzWordObj.buzzWords.some((element) => element.buzzword === body.buzzword);
  return body.hasOwnProperty('buzzword') && body.hasOwnProperty('score') && !checkAvailability;
}*/

/*// POST user[name]=tobi&user[email]=tobi@learnboost.com
req.body.user.name
// => "tobi"

req.body.user.email
// => "tobi@learnboost.com"

// POST { "name": "tobi" }
req.body.name
// => "tobi"*/



/*app.put('/buzzword', (req, res) => {

});

app.delete('/buzzword', (req, res) => {

});


app.reset('/reset', (req, res) => {

});


const checkPostBody = (bodyObj) => {
let duplicateCheck = buzzwordsJSON.buzzwords.some((element) => element.buzzword === bodyObj.buzzword);
return bodyObj.hasOwnProperty('buzzword') && bodyObj.hasOwnProperty('points') && !duplicateCheck;
};

.post((req, res) => {
if(checkPostBody(req.body)) {
req.body.heard = false;
req.body.points = Number(req.body.points);
buzzwordsJSON.buzzwords.push(req.body);
res.json({success: true});
} else {
res.status(400).end('Invalid or Duplicate Object');
}
})



//////////////////

*/




app.listen(PORT, (err) =>{
  console.log('Server running on port:' + PORT);
});