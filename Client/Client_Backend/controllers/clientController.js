const clientRegistartion = require('../models/clientRegistration')




const getfillter = async (req, res) => {



    const { email, customerFirstName } = req.body;
    clientRegistartion.find({ email: email , customerFirstName:customerFirstName }, (err, user) => {
        if (user) {
            

                return res.status(200).json({ message: "Login successful!", data: user })
           
        } else {
            return res.status(400).json({ error: "Not registered!" })
        }
    })
    console.log(clientRegistartion)
}

/*Post client registration */

const postClientRegistration = async (req, res) => {
    let newClient = new clientRegistartion(req.body);

    newClient.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "client register successfully!",
            status: "200"
        });
    });
}

/*Get all register client */

const getAllClients = async (req, res) => {
    try {
        const clientData = await clientRegistartion.find()
        return res.status(200).send({
            status: "200",
            data: clientData
        })
    } catch (err) {
        return res.status(500).send({
            status: "500",
            err: err
        })
    }
}

/*Update Client */

const updateClient = async (req, res) => {
    clientRegistartion.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },

    ).then(() => {
        res.status(200).send({ status: "200", statusmsg: "user updated" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: "500", statusmsg: "error with updating data" });

    })
}

/*Delete Client */

const deleteClient = async (req, res) => {

    clientRegistartion.findByIdAndDelete(
        req.params.id
    ).then(() => {
        res.status(200).send({ status: "200", statusmsg: "user deleted" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: "500", statusmsg: "error with deleting data" });

    })

}

//  /**Login */
const clientLogin = async (req, res) => {
    // let client1 = new clientRegistration (req.body);

    // var sid = 'AC697d9072eb9ba0ff7ba9f959e68b8e7e';
    // var auth_token = 'bc3b03f06dc275303a09d900cee912a1';

    // var twilio = require("twilio")(sid, auth_token);

    // twilio.messages
    //     .create({
    //         from: "+18455346430",
    //         to: "+94711333900",
    //         body: "this is a testing message",
    //     })
    //     .then(function (res) { console.log("message has sent!") })
    //     .catch(function (err) {
    //         console.log(err);
    //     });




    const { email, password } = req.body;
    clientRegistartion.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password && email === user.email) {

                return res.status(200).json({ message: "Login successful!", data: user })
            } else {
                return res.status(400).json({ error: "Invalid email or password!" })
            }
        } else {
            return res.status(400).json({ error: "Not registered!" })
        }
    })
    console.log(clientRegistartion)
}


module.exports = {
    postClientRegistration,
    getAllClients,
    updateClient,
    deleteClient,
    clientLogin,
    getfillter
}