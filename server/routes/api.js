const fs = require('fs');
const path = require('path');
const url = require('url');
var express = require('express');
var router = express.Router();
var api = require('../controllers/apiController');

const students = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/students.json')));

router.use((req, res, next)=>{
   res.set({
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
     'Content-type': 'application/json'
   });
   if(req.method === 'OPTIONS'){
     return res.status(200).end();
   }
   next();
 });
// list
router.get('/list', api.list);

router.get('/lists', (req, res, next) => {
  res.json(students);
});

// find
router.get('/student/:studentid', api.read);

//create
router.post('/create', api.create);

router.put('/update/:studentid', api.update);

router.delete('/delete/:studentid', api.delete);

// export our router
module.exports = router;
