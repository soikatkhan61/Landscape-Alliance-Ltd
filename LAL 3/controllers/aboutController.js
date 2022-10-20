
exports.brandProfileRender = async(req,res,next) =>{
   res.render("pages/about/profile",{flashMessage:''})
}
exports.renderVision = async(req,res,next) =>{
   res.render("pages/about/vision",{flashMessage:''})
}
exports.renderMission = async(req,res,next) =>{
   res.render("pages/about/mission",{flashMessage:''})
}
exports.renderPromices = async(req,res,next) =>{
   res.render("pages/about/promices",{flashMessage:''})
}

