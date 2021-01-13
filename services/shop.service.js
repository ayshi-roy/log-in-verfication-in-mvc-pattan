const Shop = require('../models/Shop.model');

//add shop data
module.exports.create = shop => {
    return Shop.create(shop);
}

//get total shop data
module.exports.totalData = () => {
    return Shop.find();
}

//get single shop Data
module.exports.getById = (singleId) => {
    return Shop.findById(singleId);
};

//update single shop Data
module.exports.updateSingleValue = (updateId, updateField, validator) =>{
    return Shop.findOneAndUpdate(updateId, updateField, validator)
};

//delete a single Data
module.exports.deleteSingleValue = (deleteId) =>{
    return Shop.findOneAndDelete(deleteId);
};
