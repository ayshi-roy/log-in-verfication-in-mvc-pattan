const shopService = require('../services/shop.service');

module.exports.create = async(req, res, next) => {
    try{
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message: 'something went wrong'});
    }
}

//get all data 
module.exports.getAll = async (req, res, next) => {
    try {
        const shop = await shopService.totalData();
        res.send(shop);
    }
    catch (err) {
        return res.status(500).json({message: 'something went wrong'});
    }
}

//get single id Data
module.exports.singleId = async(req, res, next) => {
    try {
        const id = req.params.id;
        const singleShopValue = await shopService.getById(id);
        res.send(singleShopValue);
    } catch (err) {
        return res.status(500).json({message: 'something went wrong'})
    }
}

//update single id data
module.exports.updateValue = async(req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const updateField = req.body;
    try{        
        const shop = await shopService.updateSingleValue({_id: id}, updateField,{
            new: true,
            runValidation: true,
        });
        return res.status(200).send(shop);
    }catch (err) {
        return res.status(500).json({message: 'something went wrong'})
    }
}

//delete a single value
module.exports.deleteValue = async (req, res, next) => {
    try{
        const id = req.params.id;
        const shop = await shopService.deleteSingleValue({_id: id});
        res.send(shop);
    } catch (err) {
        return res.status(500).json({message: 'something went wrong'})
    }   
}
