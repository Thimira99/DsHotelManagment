const express = require('express')
const { getRoomReservations, postRoomReservations, updateRoomReservations, deleteRoomReservations, getRoomReservationsById } = require('../controllers/controllers')
const router = express.Router()

const roomReservation = require('../models/roomReservations')

router.get("/roomReservations", getRoomReservations)
router.post("/roomReservations/post", postRoomReservations)
router.put("/roomReservation/update/:id", updateRoomReservations)
router.delete("/roomReservation/delete/:id", deleteRoomReservations)
router.get("/roomReservations/:id", getRoomReservationsById)

module.exports = router