'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  //$2b$12$gGMw7GRprcswJS1UNnHAAO8lzLJ9oZoaBPqugxBuwxi6fw/KqtSGW
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res); //true
  });
});

//END_ASYNC

//START_SYNC

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
//$2b$12$VDaBUX7KxnaePIAmlIfHZ.kfKDLdCfRv5.w2s/NW8.J727g9WVuMK
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);

//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
