let express = require('express');
let router = express.Router();

 
/* chưa tìm được syntax chèn link vào router */ 

   router.get('/link',(req,res,next)=>{
   res.redirect('https://youtu.be/QH2-TGUlwu4');
 
});

module.exports = router;