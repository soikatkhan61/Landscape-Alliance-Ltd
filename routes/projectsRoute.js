const router = require('express').Router();
const {singleProjectGetController, projectEditGetController, projectDeleteGetController, projectImageDeleteController,renderAllProjects} = require('../controllers/projectControllers')

router.get('/delete-img', projectImageDeleteController)
router.get('/:id', singleProjectGetController)
router.get('/edit/:id', projectEditGetController)

router.get('/delete/:id', projectDeleteGetController)
router.get('/', renderAllProjects)

module.exports = router;