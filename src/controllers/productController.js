const productController = {
    cart : (req,res)=>{
        res.render('products/cart');
    },

    productDetail : (req,res)=>{
        res.render('products/productDetail');
    },

    agregarProducto : (req,res)=>{
        res.render('products/agregarProducto');
    },
    
    editarProducto : (req,res)=>{
        res.render('products/editarProducto');
    }
}

module.exports = productController;