
const db = require('../config/db')


exports.renderBrandProfile = async(req,res,next) =>{
   let slug = req.params.slug
   console.log(slug);
   let [data,profilesFeilds] = await db.query(`select slug,title,body from profiles where slug='${slug}'`)
   res.render("pages/about/profile",{title:'Profile - Landacape Alliance ltd',flashMessage:'',data})
}


exports.getProfiles = async(req,res,next) =>{
   let [profiles,profilesFeilds] = await db.query("select slug,title from profiles;")
   res.send({data:profiles})
}

exports.getCompanyInfo = async (req, res, next) => {
   try {
      let [info,profilesFeilds] = await db.query("select * from info where id=1;")
      res.send({info})
   } catch (error) {
     next(error);
   }
 };