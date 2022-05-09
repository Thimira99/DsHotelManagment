const roomReservations = require('../models/roomReservations')

/*Post room reservations */
const postRoomReservations= async(req,res)=>{
    let newRoomReservation = new roomReservations(req.body);

        newRoomReservation.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Room reserved successfully!"
            });
        });
    
}

/*Get reservations */
const getRoomReservations= async(req,res)=>{
    try{
        const data = await roomReservations.find()
        return res.status(200).send({data:data})
    }catch(err){
        return res.status(500).send({err:err})
    }
    
}

/*Update reservations */

const updateRoomReservations = async(req,res)=>{
    roomReservations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Reservation)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Reservation details updated successfully!"
            });
        }
    );
};

/*Delete Reservations */
const deleteRoomReservations=async(req,res)=>{
    roomReservations.findByIdAndRemove(req.params.id).exec((err,deletedRoomReservation)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the the reservation something is wrong!",deletedRoomReservation
            });
        }
        return res.status(200).json({
            success:"Reservation deleted successfully!",deletedRoomReservation
        });
    });
};

module.exports={
    getRoomReservations,
    postRoomReservations,
    updateRoomReservations,
    deleteRoomReservations
}