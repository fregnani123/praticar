

// app.get("/", (req,res) => {
//     res.send('oi')
// } )



const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.resolve("index",__dirname,'views')))

app.get('/pagina2',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina2.html'))
});

app.get('pagina3',(req,res)=>{
    res.sendFile(__dirname,)
})

app.listen(3000, () => {
   console.log(`servidor rodando na ${PORT}`)
})

