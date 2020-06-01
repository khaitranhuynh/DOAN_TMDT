let express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            res.locals.Categories = data;
            res.render('index');
        })
        .catch(error => next (error));
 
});

module.exports = router;