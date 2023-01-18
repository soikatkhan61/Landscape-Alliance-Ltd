const router = require("express").Router()

const {renderBrandProfile,getProfiles,getCompanyInfo} = require("../controllers/aboutController")

//router.get("/",signUpGetController)


router.get("/get-profiles",getProfiles)
router.get("/get-company",getCompanyInfo)

router.get("/info/:slug",renderBrandProfile)
router.get("/",(req,res)=>{
    res.render("pages/error/500",{flashMessage:''})
})

module.exports = router