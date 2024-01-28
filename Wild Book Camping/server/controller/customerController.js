const Customer = require("../model/Customer");
const customerController={
    saveCustomer: async function (req, res, next) {
        try {
            const customerData = req.body;
            console.log(req.body);

            const customer = await Customer.create(customerData);

            res.status(200).json(customer);

        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    getdetail:async function (req, res, next) {
        try {
            const email = req.params.email;

            const customer = await Customer.find({email: email});

            res.status(200).json(customer);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    // getAllCustomers:async function (req, res, next) {
    //     try {
    //         const productList = await Customer.find();
    //
    //         res.status(200).json(productList);
    //     }catch (err){
    //         console.log(err);
    //         res.status(500).json({error:'something went wrong !'});
    //     }
    // },
}

module.exports=customerController;
