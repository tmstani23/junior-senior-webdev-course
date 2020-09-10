const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
var winston = require('winston');
var morgan = require('morgan');

const bodyParser = require('body-parser');
const app = express()
app.use(cors())
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
    res.status(200).json('success');
  } else {
    winston.error('This guy is messing with us:' + userInput);
    res.status(400).json('incorrect submission')
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))