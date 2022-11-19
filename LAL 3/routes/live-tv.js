const router = require("express").Router()

const {isAuthenticated} = require('../middleware/authMiddleware')

const {jamunaTV,rtv} = require("../controllers/liveTVC")

router.get("/jamuna",jamunaTV)
router.get("/rtv", isAuthenticated,rtv)


module.exports = router