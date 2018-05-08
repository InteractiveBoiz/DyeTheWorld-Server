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

const teamModule = require('./routes/teamRoutes');
app.use(teamModule);

app.listen(process.env.PORT || 3000);