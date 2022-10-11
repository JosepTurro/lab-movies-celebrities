// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create",(req, res, next)=>{
    res.render("celebrities/new-celebrity");   //Aqui mira el new celebrity hbs que estas fent que cuant el usuari en el navegador tingui /celebrities/creat es renderitzi el new-celebrity.hbs

})

router.post("/celebrities/create", (req, res, next)=>{
    Celebrity.create(req.body)//aqui si en el form a la varible on posa name hin haguues una cosa escrita difent del Schema al final de body haurim  de posar .deloque hi hagi escrit
    .then(result=>{
        console.log("result: ", result);
        // const data = {
            
        //     celebrity: result
        // }
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log("error: ", err);
        res.render("celebrities/new-celebrity");
    })
    
})

router.get("/celebrities", (req, res, next)=>{
    Celebrity.find()
    .then(result=>{
        const data = {celebrity: result}
        res.render("celebrities/celebrities.hbs", data)
        
    })
    .catch(err => {
        console.log("error: ", err);
        
    })
})



module.exports = router;