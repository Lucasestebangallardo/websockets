
const express = require('express');
const {Server} = require('socket.io');
const {connectionSocket} = require('./utils/soket.io')
const handlebars = require('express-handlebars');
const productsRoute = require('./routes/products.routes');
const cardsRoute = require ('./routes/carts.routes')
const productsRouteBd = require('./routes/products.router.bd')
const cartsRouteBd = require('./routes/carts.router.bd')
const viewRoute = require('./routes/views.route')
const chatsRouter = require('./routes/chats.router')
const server = express();
const mongoose = require('mongoose');
const productModel = require('./dao/models/products.model');

mongoose.set('strictQuery', false)



const httpServer = server.listen(8080, ()=> {
    console.log('Servidor Listo en puerto 8080')
    
})

//handlerbars
server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');
//express
server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))
//rutas

server.use("/api/products/", productsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/", viewRoute);
server.use("/api/productsBd/", productsRouteBd );
server.use("/api/cartsBd/", cartsRouteBd );
server.use("/api/chats/", chatsRouter );




const test = async ()=>{
    await mongoose.connect('mongodb+srv://LucasGallardo:Legl42785793@codercluster.jbsak8c.mongodb.net/?retryWrites=true&w=majority',
   );
   console.log("Su conexion a la base fue exitosa")
  
  }
  test();
  connectionSocket (httpServer);