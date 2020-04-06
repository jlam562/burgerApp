const router = require('express').Router()
const burger = require('../controller/burgers_controller.js')

//GET ALL BURGERS
router.get('/burgers', (req, res) => {
  burger.getBurgs(burgers => {
    res.json(burgers)
  })
})

//POST A NEW BURGER
router.post('/burgers', (req, res) => {
  burger.getOneBurg(req.body, () => {
    res.sendStatus(200)
  })
})

//UPDATE A BURGER
router.put('/burgers/:id', (req, res) => {
  burger.updateBurg({ devoured: true }, req.params.id, () => {
    res.sendStatus(200)
  })
})
