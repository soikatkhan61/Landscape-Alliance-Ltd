const router = require('express').Router();
const {singleProjectGetController, projectEditGetController, projectDeleteGetController} = require('../controllers/projectControllers')

router.get('/:id', singleProjectGetController)
router.get('/edit/:id', projectEditGetController)

router.get('/delete/:id', projectDeleteGetController)

module.exports = router;