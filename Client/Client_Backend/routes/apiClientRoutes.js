const express = require('express')
const { getRoomReservations, postRoomReservations, updateRoomReservations, deleteRoomReservations, getRoomReservationsById } = require('../controllers/controllers')
const { postClientRegistration, getAllClients, updateClient, deleteClient, clientLogin, getfillter } = require('../controllers/clientController')
const { getPayment, postPayment, deletePayment, getPaymentById } = require('../controllers/paymentController')

const { getHotels, getHotelById } = require('../controllers/hotelController')


const router = express.Router()

const roomReservation = require('../models/roomReservations')

router.get("/roomReservations", getRoomReservations)
router.post("/roomReservations/post", postRoomReservations)
router.put("/roomReservation/update/:id", updateRoomReservations)
router.delete("/roomReservation/delete/:id", deleteRoomReservations)
router.get("/roomReservations/:id", getRoomReservationsById)

/*client registration */
router.post("/clientregister/post", postClientRegistration)
router.get("/clientregister", getAllClients)
router.put("/clientregister/update/:id", updateClient)
router.delete("/clientregister/delete/:id", deleteClient)

/*Payment */
router.post("/payment/post", postPayment)
router.get("/payment", getPayment)
router.get("/payment/:id", getPaymentById)
router.delete("/payment/delete/:id", deletePayment)

/**Login */
router.post("/login", clientLogin)
router.post("/filter", getfillter)

/*hotel Client routes */
router.get("/client/get/hotels", getHotels)
router.get("/client/getHotel/:id", getHotelById)


module.exports = router