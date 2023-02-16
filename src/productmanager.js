/* // import fs, { readFile } from 'fs';
const fs = require ("fs");
const { parse } = require("path");

const readFile = async(path)=>{
    const productsDocument = await fs.promises.readFile(path);
    const productsJSON = JSON.parse(productsDocument);
    return productsJSON;
}

const writeFile = async(path,product)=>{
    fs.promises.writeFile(path,JSON.stringify({products:product}))
}
class ProductManager {
    constructor(path) {
        this.id = 0;
        this.path = path;
        this.product = [];
  }
  CreateFile = async () => {
		const File = fs.existsSync(this.path);

		if (File) {
			console.log("Ya existe el archivo");
			const { product } = await readFile(this.path);
			this.product = product;
		} else {
			await writeFile(this.path, this.product);
			console.log("Archivo creado con éxito!");
		}
	};
   addProduct = async (objeto) => {
    if(objeto.title ||
       objeto.description ||
       objeto.code ||
       objeto.price ||
       objeto.Status ||
       objeto.stock ||
       objeto.category 
       ){
         const {products} = await readFile(this.path);
         this.product = products;
         this.product.push({
           id : this.product.length,
           ...objeto
         })
         await writeFile(this.path,this.product)
         return{msg:"El producto fue agregado de forma exitosa"};
       }
       else{
        return{msg:"Faltan campos obligatorios"}
       }
  }
  

  async getProducts(limite) {
    if (limite == undefined){
        const data = await readFile(this.path)
        return data
    }else{
        const {products} = await readFile (this.path);
        const filtro = products.slice(0,limite);
        return filtro;
    }
  }
  getProductsById = async(id)=>{
    const {products} = await readFile (this.path);
    const productId = products.find((product)=>product.id === parseInt(id));
    if (productId){
        return productId;
    }else{
      return null;
    }
  };

  async updateProducts(id,object) {
    const{products} = await readFile (this.path);
    this.products = products
    const productUpgrade = this.products.findIndex((element)=>element.id === id)
    if (productUpgrade !== -1){
      const id = this.products[productUpgrade].id
      this.products[productUpgrade]={
        id,
        ... object
      }
      await writeFile (this.path,this.products);
      return ("El producto se actualizo correctamente")
    }else{
      return{status:400,error:"El producto a actualizar no se encunetra"}
    }
  }

  async deleteProduct(id) {
    const{products} = await readFile (this.path);
    this.products = products
    const productDelete = this.products.findIndex((element)=>element.id === id)
    if (productDelete !== -1){
      const nuevoArray = this.products.filter((productos)=>productos.id !== id);
      await writeFile (this.path,nuevoArray);
      return {msg:"El producto se elimino correctamente"}
    }else{
      return{msg:"El producto eliminado no se encunetra"}
    }
  }
}
module.exports = ProductManager; */