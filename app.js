const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname +'/public'));


app.set('views', path.resolve(__dirname, './src/views'));  
app.set('view engine', 'ejs');

const mainRutas = require('./src/routes/mainRutas')
const userRutas = require('./src/routes/userRutas')
const productRutas = require('./src/routes/productRutas')


app.use('/', mainRutas);

app.use('/users', userRutas);

app.use('/products', productRutas);


app.listen(process.env.PORT || 3000, () => {
  console.log("El servidor inicio correctamente");
});