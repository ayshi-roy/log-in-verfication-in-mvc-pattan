const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');



router.post('/',shopController.create);
router.get('/',shopController.getAll);
router.get('/:id',shopController.singleId);
router.put('/:id',shopController.updateValue);
router.delete('/:id',shopController.deleteValue);

module.exports = router;