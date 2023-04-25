const formElements = document.getElementById('salvarTransaccion');

formElements.addEventListener('submit', (event)=> {
    event.preventDefault();
    let transaccionDes = document.getElementById('transaccionDescripcion').value;
    let precioDes = document.getElementById('precioDescripcion').value;

    let transaccion = {transaccionDescripcion : transaccionDes, precioDes : precioDes}
    let transaccionJson = JSON.stringify(transaccion);
    //manda la transaccionJson al backend y guardarlos ahi

    fetch('http://localhost:3000/transaccion', {
        method: 'Post',
        body : transaccionJson
    })

})
