const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000

//ESTO DEBERIA IRSE A MI BASE DE DATOS//
let tansaccionArr = [];



//#region
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());
//#endregion

app.get('/transaccion', (req, res)=> {
    res.send(JSON.stringify(tansaccionArr))
})

app.post('/transaccion', (req, res)=> {
    let transaccion = req.body
    tansaccionArr.push(transaccion)
    res.send(JSON.stringify('transaccion guardada'));
    //res.send('Me hicieron un post')

    console.log(tansaccionArr)
})
 

app.listen(port, ()=> {
    console.log(`Estoy funcionando en http://localhost:${port}`)
})