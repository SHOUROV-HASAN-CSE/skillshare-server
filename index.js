const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;



const categories = require('./data/categories.json');



app.get('/',(req, res) =>{
  res.send('Course Server Running');
})

app.get('/course-categories',(req, res) =>{
  res.send(categories);
})





app.listen(port, () => {
  console.log('Course Server Running on', port);
})