const router = require("express").Router()

const {renderHrPolicy} = require("../controllers/policyController")

//router.get("/",signUpGetController)
router.get("/hr-policy",renderHrPolicy)
// router.get("/mission",renderMission)
// router.get("/vision",renderVision)
// router.get("/promices",renderPromices)

module.exports = router