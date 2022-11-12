var express = require('express');
var router = express.Router();
var os = require('os')

/* GET OS listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        hostname :os.hostname(),
        type : os.type(),
        platform : os.platform()
        
    })
});

router.get('/cpus',function(req,res,next){
    res.status(200).json({
        liste_processus :os.cpus()
    })
})

router.get('/cpus/:id',function(req,res,next){
    const {id} = req.params
    id <0 && res.status(401).json({message :""})
    const cpus = os.cpus()

    res.status(200).json(cpus[id])
})



module.exports = router;


