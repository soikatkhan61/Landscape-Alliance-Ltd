const router = require("express").Router()
const db = require('../config/db')
const upload = require('../utils/multer')

const {createPostGetController, createPostPostController, allPostsGetController} = require('../controllers/admin')
const {uploadPostImagesController} = require('../api/controllers/postControllers')

const {msgGetContrller,singleMsgGetContrller,deleteMsgGetContrller} = require("../controllers/contactUsController")
const {adminOrderGetController,respondController,deleteOrdersController} = require("../controllers/orderController")
router.get("/", (req, res)=>{
  res.render("./admin");
})



router.get("/create-post", createPostGetController)

router.post("/create-post", upload.fields([{name: "thumbnail", maxCount: 1}, { name: "project-images"}, {name: "files"}]), createPostPostController)

router.get("/all-posts", allPostsGetController);

router.post("/upload-post-images", uploadPostImagesController)

router.get("/messages", msgGetContrller)
router.get("/messages/:msg_id", singleMsgGetContrller)
router.get("/messages/delete/:msg_id", deleteMsgGetContrller)



router.get("/orders/respond", respondController)
router.get("/orders/delete", deleteOrdersController)
router.get("/orders", adminOrderGetController)

module.exports = router