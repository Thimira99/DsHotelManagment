const express= require('express')
const router = express.Router()
const {getReservations,postReservations,updateReservations, deleteReservations} =  require('../controllers/controller')
const Reservations = require('../models/Reservations')
const{AdminLogin , postUser } = require('../controllers/adminUser')



router.get("/reservations",getReservations)
router.post("/reservations/post",postReservations)
router.put("/reservations/update/:id",updateReservations)
router.delete("/reservations/delete/:id",deleteReservations)

// User
router.post("/user/post",postUser)

/**Login */
router.post("/login", AdminLogin)

module.exports=router

