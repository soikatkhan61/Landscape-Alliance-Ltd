
exports.jamunaTV = async(req,res,next) =>{
    res.render("pages/utils/tv",{flashMessage:'',title:'Live TV'})
 }
 
 exports.rtv = async(req,res,next) =>{
    res.render("pages/utils/rtv",{flashMessage:'',title:'Live TV'})
 }

 
 