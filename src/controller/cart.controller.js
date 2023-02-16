const ProductManager = require("../dao/fsManager/ProductManager");
const CartManager = require('../dao/fsManager/CartManager')
const Product = new ProductManager('./assets/product.json');
const Carts = new CartManager(__dirname + '/../../assets/carts.json');

const createcart = async (req, res) => {
  const resp = await cart.CreateFile();
  res.json({ msg: 'se creo el carro de forma exitosa', id: resp });
};

const getchango = async (req, res) => {
  const resp = await cart.getchango(req.params.cid);
  if (resp.error) {
    res.json(resp.status).send(resp);
  } else {
    res.json(resp);
  }
};

const addProductCart = async (req, res) => {
  const { cid, pid } = req.params;
  const products = await pm.getProductsById(pid);
  
  if (products) {
      const resp = await cart.addProductCart(cid, products.id);
      res.json  ({ msg:"Producto Agregado"})  
  }else {
      res.json  ({ msg:"Producto no Encontrado"})  
  }
  
};

module.exports = {
  createcart,
  getchango,
  addProductCart
};