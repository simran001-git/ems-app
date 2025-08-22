require('dotenv').config();
const express = require('express');
const connectDB = require('./models/connection');
const { engine } = require('express-handlebars');
const app = express();

// Connect to DB, then start 
// server
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('home');
});

app.use("/emp", require("./CONTROLLERS/routes"));

const PORT = process.env.PORT || 4000;


    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  
   

