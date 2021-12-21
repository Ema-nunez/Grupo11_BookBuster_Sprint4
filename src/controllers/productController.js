const modelController = require('../model/jsonDatabase');
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')

const productController = {
    cart : (req,res)=>{
        res.render('products/cart');
    },

    detail : (req,res)=>{
        const productDetail = productModel.find(req.params.id)
    
        res.render('products/productDetail', {productDetail});
    },

    create : (req,res)=>{
        res.render('products/agregarProducto');
    },
    
    edit : (req,res)=>{
        res.render('products/editarProducto');
    },
    eliminar: function(req,res){
        productModel.delate(res.params.id);
        res.redirect("/");
    }
}

module.exports = productController;