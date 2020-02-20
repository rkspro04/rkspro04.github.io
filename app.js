let express = require('express');
let todoC = require('./controllers/todoC');
let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

todoC(app);

app.listen('99');