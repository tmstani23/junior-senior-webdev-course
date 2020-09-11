const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
var winston = require('winston');
var morgan = require('morgan');
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');
const app = express()


//restrict access to anyone who isn't on the whitelist
var whitelist = ['http://localhost:3001', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
//app.use(cors(corsOptions));
app.use(cors());
//helmet covers most necessary headers and prevents attacks
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json())



app.get('/', (req, res) => {
  //prevent cross site scripting and Cros Site Resource Fabrication attacks
  res.cookie('session', '1', {httpOnly: true, secure: true});
  
  //res.cookie('session', '1', {secure: true});
  res.set({
    'Content-Security-Policy': "script-src 'self' 'https://www.google.com/'"
  })

  res.send('Hello World!')
})

app.post('/secret', (req, res) => {
  const { userInput } = req.body;
  
  //console.log(userInput);
  if (userInput) {
    winston.log('info', 'user input: ' + userInput);
    hashPasswordAndRespond(userInput, res);
    
  } else {
    winston.error('This guy is messing with us:' + userInput);
    res.status(400).json('incorrect submission')
  }
})

async function hashPasswordAndRespond (userInput, res) {
  const saltRounds = 10;
  //hash the userInput password
  const result = await bcrypt.hash(userInput, saltRounds)
  //check if the hash matches password
  //const match = await bcrypt.compare('wtfmate', result);
  const match = await bcrypt.compare(userInput, result);
  console.log(result, match);
  console.log('success message')
  return match 
    ? res.status(200).json('success')
    : res.status(400).json('request failed'); 
  

}

app.listen(3001, () => console.log('Example app listening on port 3001!'))