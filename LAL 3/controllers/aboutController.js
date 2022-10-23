
exports.brandProfileRender = async(req,res,next) =>{
   res.render("pages/about/profile",{title:'Profile - Landacape Alliance ltd',flashMessage:''})
}
exports.renderVision = async(req,res,next) =>{
   res.render("pages/about/vision",{title:'Vision - Landacape Alliance ltd',flashMessage:''})
}
exports.renderMission = async(req,res,next) =>{
   res.render("pages/about/mission",{title:'Mission - Landacape Alliance ltd',flashMessage:''})
}
exports.renderPromices = async(req,res,next) =>{
   res.render("pages/about/promices",{title:'Promices - Landacape Alliance ltd',flashMessage:''})
}

