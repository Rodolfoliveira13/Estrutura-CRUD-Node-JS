const express = require("express");
const app = express();
const port = 3000;
const routes = require("./controller/routes/routes");
const path = require("path");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.urlencoded({ extended:true }));
app.use('/public', express.static(path.join(__dirname, './public')));

app.use(routes)

app.listen(port, (error) => {
     if(error) {
          console.log("deu erro.")
          return;
     }
     console.log("funcionou");
});