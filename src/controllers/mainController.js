const objetos = [
    {
        nombre : 'Spy x Family 02',
        editoria : 'ivrea',
        precio : 550,
        img : 'images/products/spyxfamily02.jpg'

    },

    {
        nombre : "Metal Gear Solid",
        editoria : "Ivrea",
        precio: 600,
        img : 'images/products/productoOferta1.jpg'
    },
    
    {
        nombre: "Death Note",
        editoria : 'Ivrea',
        precio : 450,
        img : 'images/products/producto9.jpg'
    },

    {
        nombre : 'Spy x Family 03',
        editoria: 'Ivrea',
        precio : 300,
        img : 'images/products/spyxfamily03.jpg'
    },
    {
        nombre: 'Teenage Mutant Ninja Tourtles',
        editoria : 'Ivrea',
        precio: 350,
        img : 'images/products/productoOferta2.jpg'
    },

    {
        nombre : 'Resident Evil',
        editoria : 'Ivrea',
        precio : 400,
        img : 'images/products/producto11.jpg'
    },

    {
        nombre: 'Spy x Family 06' ,
        editoria: 'Ivrea',
        precio: 450 ,
        img : 'images/products/spyxfamily06.jpg'
    },
    {
        nombre : 'The Amazing Spider-Man' ,
        editoria : 'Marvel' ,
        precio : 550 ,
        img : 'images/products/productoOferta3.jpg'
    },

    {
        nombre : 'My hero Academia',
        editoria : 'Ivrea',
        precio : 450,
        img: '/images/products/producto14.jpg'
    },
    {
        nombre : 'Spy x Family 07',
        editoria : 'Ivrea',
        precio: 400,
        img: 'images/products/spyxfamily07.jpg'
    },
    {
        nombre: 'Justice League',
        editoria : 'Dc Comics',
        precio : 500,
        img : 'images/products/productoOferta4.jpg'
    },
    {
        nombre : 'Tokyo Revengers',
        editoria :'Ivrea',
        precio : 600,
        img: 'images/products/producto16.jpg'

    }

    
];

const mainController = {
    index : (req,res)=>{
        res.render('products/index', {mangas : objetos})
    }
}

module.exports = mainController;