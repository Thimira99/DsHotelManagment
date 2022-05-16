const express = require('express')
const { getRoomReservations, postRoomReservations, updateRoomReservations, deleteRoomReservations, getRoomReservationsById } = require('../controllers/controllers')
const { postClientRegistration,getAllClients,updateClient,deleteClient,clientLogin } = require('../controllers/clientController')
const router = express.Router()

const roomReservation = require('../models/roomReservations')

router.get("/roomReservations", getRoomReservations)
router.post("/roomReservations/post", postRoomReservations)
router.put("/roomReservation/update/:id", updateRoomReservations)
router.delete("/roomReservation/delete/:id", deleteRoomReservations)
router.get("/roomReservations/:id", getRoomReservationsById)

/*client registration */
router.post("/clientregister/post",postClientRegistration)
router.get("/clientregister",getAllClients)
router.put("/clientregister/update/:id",updateClient)
router.delete("/clientregister/delete/:id",deleteClient)

/**Login */
router.post("/login",clientLogin)

module.exports = router