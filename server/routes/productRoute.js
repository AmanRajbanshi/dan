const router = require("express").Router();
const Product = require("../controllers/productController");

router.post("/product", Product.Post_Product);
router.get('/product/', Product.get_Product);
router.get('/product/hightolow', Product.get_ProductByHighToLow);
router.get('/product/lowtohigh', Product.get_ProductByLowToHigh);
router.get('/product/page:number', Product.get_ProductByPagination);

router.get('/search/:name', Product.get_ProductbySearch);
router.get('/product/:id',Product.get_ProductById);
router.patch('/product/:id',Product.update_Product);
router.delete('/product/:id',Product.delete_Product);

module.exports = router;
