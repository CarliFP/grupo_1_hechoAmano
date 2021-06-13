const express = require('express');
const router = express.Router();
const usersAPIcontroller = require('../../controllers/api/usersAPIcontroller');

router.get('/', usersAPIcontroller.list);
router.get('/:id', usersAPIcontroller.detail);

module.exports = router;