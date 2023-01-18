const router = require("express").Router()
const db = require('../config/db')
const upload = require('../utils/multer')

const {
    isAuthenticated
} = require('../middleware/authMiddleware')


const {createPostGetController, createPostPostController, allPostsGetController} = require('../controllers/admin')
const {uploadPostImagesController} = require('../api/controllers/postControllers')

const {renderAdminDashboard} = require('../controllers/admin/dashboardController')

const {aboutPageEdit,renderAddSection,addSectionPost,companyInfo,companyInfoPost} = require('../controllers/admin/aboutController')

const {msgGetContrller,singleMsgGetContrller,deleteMsgGetContrller,respondMessage} = require("../controllers/contactUsController")
const {adminOrderGetController,respondController,deleteOrdersController} = require("../controllers/orderController")

router.get("/create-post",isAuthenticated, createPostGetController)

router.post("/create-post",isAuthenticated, upload.fields([{name: "thumbnail", maxCount: 1}, { name: "project-images"}, {name: "files"}]), createPostPostController)

router.get("/all-posts",isAuthenticated, allPostsGetController);

router.post("/upload-post-images",isAuthenticated, uploadPostImagesController)


router.get("/messages/respond",isAuthenticated, respondMessage)
router.get("/messages/:msg_id",isAuthenticated, singleMsgGetContrller)
router.get("/messages/delete/:msg_id",isAuthenticated, deleteMsgGetContrller)
router.get("/messages",isAuthenticated, msgGetContrller)

router.get("/about",isAuthenticated, aboutPageEdit)
router.get("/about/add-section",isAuthenticated, renderAddSection)
router.post("/about/add-section",isAuthenticated, addSectionPost)

router.get("/info",isAuthenticated, companyInfo)
router.post("/info",isAuthenticated, companyInfoPost)


router.get("/orders/respond",isAuthenticated, respondController)
router.get("/orders/delete",isAuthenticated, deleteOrdersController)
router.get("/orders",isAuthenticated,adminOrderGetController)


router.get("/",isAuthenticated, renderAdminDashboard)


module.exports = router