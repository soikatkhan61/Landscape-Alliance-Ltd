const router = require("express").Router()

const {contactUsPostController} = require("../controllers/contactUsController")

//router.get("/",signUpGetController)
router.post("/",contactUsPostController)

module.exports = router