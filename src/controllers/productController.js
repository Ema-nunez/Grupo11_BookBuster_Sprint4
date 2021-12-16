const productController = {
    cart : (req,res)=>{
        res.render('products/cart');
    },

    detail : (req,res)=>{
        res.render('products/productDetail');
    },

    create : (req,res)=>{
        res.render('products/agregarProducto');
    },

    
    
    edit : (req,res)=>{
        res.render('products/editarProducto');
    }
}

module.exports = productController;