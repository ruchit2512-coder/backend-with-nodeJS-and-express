const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('send all dishes to you');
})
.post((req,res,next)=>{
    res.end('add all dishes to you'+req.body.name+'with details'+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('put opration is not suported');
})
.delete((req,res,next)=>{
    res.end('deleted all the dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('send details of dish'+req.params.dishId+'to you');
})
post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post opration is not suported'+req.params.dishId);
})
put((req,res,next)=>{
    res.write('updating the dish:'+req.params.dishId);
    res.end('will update'+req.body.name+'with details'+req.body.description);
});
delete((req,res,next)=>{
    res.end('deleting dish'+req.body.dishId);
});


module.exports = dishRouter;
