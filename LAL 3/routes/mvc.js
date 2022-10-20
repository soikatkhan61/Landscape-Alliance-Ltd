const router = require("express").Router()

const {homePageGetController,aboutPageGetController} = require("../controllers/homeController")

router.get("/home",homePageGetController)
router.get("/about",aboutPageGetController)

module.exports = router