const router = require("express").Router()

const {renderOrderController,orderPostController} = require("../controllers/orderController")
const orderValidator = require("../validator/orderValidator")


router.get("/",renderOrderController)
router.post("/",orderValidator,orderPostController)


module.exports = router