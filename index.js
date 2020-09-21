//use path module
const path = require('path');

//use express module
const express = require('express');
let datajason = require('./posts.json')

//use hbs view engine
const hbs = require('hbs');

//use bodyParser middleware
//const bodyParser = require('body-parser');

const app = express();
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
 
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder as static folder for static file
app.use(express.static('public'));

//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('home'//,{name : "M Fikri"}
  );
});

app.get('/home',(req, res) => {
  //render file index.hbs
  res.render('home'//,{name : "M Fikri"}
  );
});
  app.get('/api/v1/datajason', (req, res) => {
  res.status(200).json(datajason)
 })

  app.get('/api/v1/datajason/:id', (req, res) => {
    const post = datajason.find(i => i.id === +req.params.id)
    res.status(200).json(post)
  })

//route untuk manampilkan form
// app.get('/post',(req, res) => {
//   //render file form.hbs
//   res.render('form');
// });

//route untuk manampilkan form
app.get('/post_login',(req, res) => {
  //render file form.hbs
  res.render('login');
});
 
//route untuk submit form
// app.post('/post',(req, res) => {
//   //render file form.hbs
//   res.render('index',{
//     //ambil value dari textname
//     name : req.body.textname
//   });
// });

app.post('/post_login',(req, res) => {
  //render file form.hbs
  res.render('game',{
    //ambil value dari textname
    name : req.body.nama
  });
});
 
//port
app.listen(3003, () => {
  console.log('Server is running at port 3003');
});