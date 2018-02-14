const express = require('express');
const app = express();
const server = app.listen(7000,encender);
function encender(){
    console.log('servidor encendido');
}
app.use(express.static('public'))