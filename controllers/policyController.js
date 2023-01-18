exports.renderHrPolicy = async(req,res,next) =>{
    res.render("pages/policy/hr-policy",{title:'Policy',flashMessage:''})
 }