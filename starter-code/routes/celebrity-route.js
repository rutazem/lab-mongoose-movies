const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity-model');



// DELETE
// POST /books/delete/:identifier
router.post('/celebrities/:id/delete', (req, res) => {

  console.log("am i undefind or not ======> ", req.params.id)

  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/celebrities')
  })

})



// GET /celebrities DISPLAY ROUTE
router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
    // .populate()
    .then((celebrities) => {
      console.log('all celebrities: ' + celebrities)
      let obj = { allCelebs: celebrities }
      res.render('celebrities/index', obj);
    })

});


/// View of the form where you add the celeb

router.get('/celebrities/new', (req, res, next) => {

  res.render('celebrities/new')

});


// router.get('/celebrities/new', (req, res, next) => {
//   res.render("new");
// });


// CREATE
// POST /celebrities/new --> this takes the data and stores into db

router.post('/celebrities/new', (req, res) => {

  console.log("req.body", req.body)

  let celebrity = new Celebrity({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase, })

  celebrity.save().then(() => {
    res.redirect('/celebrities')
  })
})


// EDITING

// GET celebrities/:id -----> details
// GET /celebrties/new -----> form to create new



// DISPLAY EDITING FORM
router.get('/celebrities/:id/edit', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then((celeb) => {
      res.render('celebrities/edit', celeb)
    })

});


// POSTING THE EDIT

router.post('/celebrities/:id/edit', (req, res, next) => {

  Celebrity.findByIdAndUpdate(req.params.id,


    {
      // you're only allowing name,occupation,catchPhrase to be modified
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(() => {
      res.redirect('/celebrities')
    })

})


// router.get('/celebrities/new', (req, res) => {

//   res.render('new')
// });




// UPDATE

router.get('/celebrities/:id', (req, res) => {

  Celebrity.findById(req.params.id).then((celeb) => {

    let obj = { oneCeleb: celeb }
    res.render('celebrities/show', obj)

    // .then((celeb) => {
    //   res.send(req.params.id)
    // })

    // we need to request for specific celebrity info and display it 
    // on their speficif page. can we do it with req.body?

  })


})














module.exports = router;