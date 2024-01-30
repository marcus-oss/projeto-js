const express = require('express');
const router = express.Router();
const Job = require('../models/job');


//detalhe da vaga 
router.get('/view/:id', (req,res) => Job.findOne({
        where: {id: req.params.id}
}).then(job =>{
    res.render("view", {
        job
    })
}).catch(err => console.log(err)));


//form rota de envio 
router.get('/add' , (req,res) =>{
    res.render('add');
})
//add job 
router.post('/add', (req,res) =>{
  let {title, salary, company, description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router
