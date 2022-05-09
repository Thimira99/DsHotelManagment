const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    reservationId:{
        type:Number,
        required:true,
        trim:true
    },
    reservationName:{
        type:String,
        required:true,
        trim:true
    },
    numberOfReservations:{
        type:Number,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    // total:{
    //     type:Number,
    //     required:true,
    //     trim:true
    // },
},{timestamps:true})

const Reservations = mongoose.model('Reservations',reservationSchema)

module.exports=Reservations;