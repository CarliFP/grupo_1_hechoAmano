const express = require('express');
const router = express.Router();
const productAPIcontroller = require('../../controllers/api/productAPIcontroller');

router.get('/', productAPIcontroller.list);
router.get('/:id', productAPIcontroller.detail);

module.exports = router;