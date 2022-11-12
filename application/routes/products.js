var express = require('express');
const { off } = require('../app');
var router = express.Router();

const listProducts ={
	MACBOOKPRO:{
        "name":"Macbook Pro",
        "manufacturer":"Apple",
        "price":1299,
        "stock":32,
        "options":["Intel core i5","Retina Display","Long life battery"]
    },
	MACBOOKAIR:{
        "name":"Macbook Pro Air",
        "manufacturer":"Apple",
        "price":1099.99,
        "ultrabook":true,
        "stock":112,
        "options":["Intel core i7","SSD","Long life battery"]
    },
	 LENOVOX230:{
        "name":"Thinkpad x230",
        "manufacturer":"Lenovo",
        "price":1099.99,
        "ultrabook":true,
        "stock":0,
        "options":["Intel core i5","SSD","Long life battery"]
    }	
}

router.get('/',function(req,res,next){
    res.status(200).send(listProducts)
})
/*
router.get('/:id',function(req,res,next){
    const id = req.params.id
    res.status(200).send(listProducts[id] || 'product not found')
})

router.get('/:id/:qt',function(req,res,next){
    const id = req.params.id
    const qt = req.params.qt
    const price = listProducts[id].price
    res.status(200).send({
        "id" : id ,
        "qt" : qt ,
        "unit_price" : price,
        "total_price" : qt*price
    })
}) ;
*/
router.get('/:qt',function(req,res,next){
    const qt = req.params.qt
    let arr = [] ;



    for (let key of Object.keys(listProducts)){
        if (listProducts[key]["stock"]>= qt) arr.push(listProducts[key]);
    }
    
    res.status(200).send(arr)
})

module.exports = router;

