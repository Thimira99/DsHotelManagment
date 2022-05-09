const Reservations = require('../models/Reservations');



/*Post reservations*/
const postReservations= async(req,res)=>{
    let newReservation = new Reservations(req.body);

        newReservation.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Reservation added successfully!"
            });
        });
    
}

/*Get reservations */
const getReservations= async(req,res)=>{
    try{
        const data = await Reservations.find()
        return res.status(200).send({data:data})
    }catch(err){
        return res.status(500).send({err:err})
    }
    
}

/*Update reservations */

const updateReservations = async(req,res)=>{
    Reservations.findByIdAndUpdate(
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
const deleteReservations=async(req,res)=>{
    Reservations.findByIdAndRemove(req.params.id).exec((err,deletedReservation)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the the reservation something is wrong!",deletedReservation
            });
        }
        return res.status(200).json({
            success:"Reservation deleted successfully!",deletedReservation
        });
    });
};

module.exports={
    getReservations,
    postReservations,
    updateReservations,
    deleteReservations
}

//module.exports=postReservations;