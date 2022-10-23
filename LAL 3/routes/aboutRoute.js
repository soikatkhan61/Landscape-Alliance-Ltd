const router = require("express").Router()

const {brandProfileRender,renderMission,renderVision,renderPromices} = require("../controllers/aboutController")

//router.get("/",signUpGetController)
router.get("/profile",brandProfileRender)
router.get("/mission",renderMission)
router.get("/vision",renderVision)
router.get("/promices",renderPromices)
router.get("/",(req,res)=>{
    res.render("pages/error/500",{flashMessage:''})
})

module.exports = router