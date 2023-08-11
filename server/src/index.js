
const server = require('./app')
const express = require('express');
//const server = express();

require('dotenv').config()
const router = require('./routes/index')
const { conn } = require('./DB_connection')
// const PORT = 3001;
//require('./utils/users')
const {PORT} = process.env || 3001


conn.sync({force: false})
.then(()=> {
    server.listen(PORT, () => {console.log(`Server raised in port: http://localhost: ${PORT}`);})
})
.catch((error)=> console.log(error))

//require("./DB_connection")

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

// server.use(express.json())

// server.use("/rickandmorty", router)




// ******************************* sin  EXPRESS *****************************
// //const data= require('./utils/data.js')
// const getCharById = require('./controllers/getCharById.js')

// const http = require('http')

// http.createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     try { // es buena práctica el try-catch

//         const { url } = req;    
//         const id = url.split('/').pop() // ó .at(-1)

//         if (url.includes('/rickandmorty/character')) {

//             getCharById(res, id)


//             // const character = data.find((char) => char.id.toString() === id) // ó Number(id), ó == (ve el valor y no el tipo)
//             // // find devuelve el primer elemento del arreglo que cumple la condición
//             // if (character) {
//             //     res.writeHead(200, {'Content-Type': 'application/json'}) // da el status de lo que estoy respondiendo (200-> OK) y el tipo de respuesta (writeHead -> escribir un encabezado)
//             //     return res.end(JSON.stringify(character))
//             // } else {
//             //     res.writeHead(404, {'Content-type': 'application/json'});
//             //     res.end(JSON.stringify({ error: `Character not found with id: ${id}`}));
//             // }
//         } 
//     }    
//     catch (error) {
//         console.log(error)
//      return error; 
//     }
// }).listen(3001, ()=>{console.log('Server on port: 3001')});