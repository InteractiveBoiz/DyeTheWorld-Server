const express = require('express');
const app = express();

// Makes it possible to access several files containing routes without it crashing.
var cors = require('cors');
app.use(cors()); 	

const pointModule = require('./routes/pointRoute');
app.use(pointModule);

const polygonModule = require('./routes/polygonRoutes');
app.use(polygonModule);

const playerModule = require('./routes/playerRoutes');
app.use(playerModule);

app.listen(process.env.PORT || 3000);