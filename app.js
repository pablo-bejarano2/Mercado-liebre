const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public'))); //nota de preguntarle al profe como funciona esto que no entendí en la clase
const port = process.env.PORT || 3001;

app.listen(port, ()=>{console.log(`Funcionando en ${port}.`)});

app.get('/', (req, res)=>{
    let htmlPath = path.join(__dirname, "./views/home.html");
    res.sendFile(htmlPath);
});
app.get('/register', (req, res)=>{
    let htmlPath = path.join(__dirname, "./views/register.html");
    res.sendFile(htmlPath);
});
app.get('/login', (req, res)=>{
    let htmlPath = path.join(__dirname, "./views/login.html");
    res.sendFile(htmlPath);
});