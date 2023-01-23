const ProductManager = require("../productmanager");
const pm = new ProductManager ("./src/products.json")
const {emitdeleteproduct} = require ("../utils/socket.io")
const {emitaddproduct} = require ("../utils/socket.io")

const views = async (req,res)=>{
    let {products} = await pm.getProducts();
    res.render("home",{products});
}

const realtime = async (req,res)=>{
    res.render("realTimeProducts")
}

const realtimedelete = async (req,res)=>{
    const id = req.params.pid 
    let eliminado = await pm.deleteProduct(parseInt(id));
    if(eliminado.error){
        res.json(eliminado)
    } else {
        emitdeleteproduct(id);
        res.json(eliminado)
    }
}

const addrealtime = async (req,res)=>{
    const pepe = req.body;
    const products = await pm.addProduct(pepe);
    if(products.error){
        res.json(products)
    }else{
        emitaddproduct(products)
        res.json(products)
    }
}


module.exports = {
    views,
    realtime,
    realtimedelete,
    addrealtime
}

