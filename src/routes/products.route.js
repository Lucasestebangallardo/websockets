const {Router} = require ("express")

const productscontroller = require ('../controller/products.controller');

const router = Router (); 

router.get('/',productscontroller.getProducts);
router.get('/:pid',productscontroller.ProductsbyId);
router.post('/',productscontroller.addProduct);
router.put('/:pid',productscontroller.updateProducts);
router.delete('/:pid',productscontroller.deleteProduct);


module.exports = router;