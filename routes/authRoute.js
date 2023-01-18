const router = require("express").Router()

const changePasswordValidator = require('../validator/auth/changePasswordValidator')

const {
    isUnAuthenticated,
    isAuthenticated
} = require('../middleware/authMiddleware')


const {
    loginGetController,
    loginPostController,
    verifyGetController,
    verifyController,
    sendVerifyCode,
    logoutController,
    changePasswordGetController,
    changePasswordPostController,
    renderForgotPassword,
    forgotPasswordPostController,
    setNewPassword
} = require("../controllers/auth")



router.get("/verify",isUnAuthenticated,verifyGetController)
router.post("/verify",isUnAuthenticated,verifyController)

router.get("/send-verification-code/:email",isUnAuthenticated,sendVerifyCode)

router.get("/login",isUnAuthenticated,loginGetController)
router.post("/login",isUnAuthenticated,loginPostController)



router.get("/change-password",isAuthenticated,changePasswordGetController)
router.post("/change-password",isAuthenticated,changePasswordValidator,changePasswordPostController)

router.get("/forgot-password",isUnAuthenticated,renderForgotPassword)
router.post("/forgot-password",isUnAuthenticated,forgotPasswordPostController)

router.post("/new-password",isUnAuthenticated,setNewPassword)


router.get("/logout",logoutController)




module.exports = router