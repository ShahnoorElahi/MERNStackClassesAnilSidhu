module.exports=reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('please enter age')
    }
    else if(req.query.age < 18){
        res.send('your age is small')
    }
    else{
        next();
    }
};
