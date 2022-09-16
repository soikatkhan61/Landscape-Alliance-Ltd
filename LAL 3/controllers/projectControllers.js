const db = require('../config/db')
const fs = require('fs')

exports.singleProjectGetController = async(req, res)=>{
  const id = req.params.id;
  
  console.log("id", id)
  const [rows, fields] = await db.query("select * from projects where id=?", [id]);
  console.log(rows)
  const projectImages = JSON.parse(rows[0].gallery)
  

  res.render('pages/single-project', {project: rows[0], projectImages});
}

exports.projectEditGetController = async(req, res)=>{
  const id = req.params.id;

  const [rows, fields] = await db.query('select * from projects where id=?', [id]);

  if(rows.length == 0){
    return res.redirect('/admin/all-posts')
  }

  const projectImages = JSON.parse(rows[0].gallery)

  res.render('admin/create-post', {project: rows[0], projectImages})
}

exports.projectDeleteGetController = async(req, res)=>{
  const id = req.params.id;
  

  const [rows, fields] = await db.query(`select * from projects where id=${id}`)
  const thumbnail = rows[0].thumbnail;
  const projectImages = JSON.parse(rows[0].gallery);
  const postImages = JSON.parse(rows[0].post_images)

  await db.query(`delete from projects where id = ${id}`)
  
  fs.unlink(`public/upload/projects/${thumbnail}`, (e)=>{
    if(e) console.log(e)
  })

  projectImages.forEach(async image => {
    fs.promises.unlink(`public/upload/projects/${image}`)
  })

  postImages.forEach(async image => {
    fs.promises.unlink(`public/upload/projects/${image}`)
  })

  res.redirect('/admin/all-posts')
}

exports.projectImageDeleteController = async(req, res)=>{
  const src = req.query.src;
  const post = req.query.post;

  fs.promises.unlink(`public/upload/projects/${src}`)

  const [rows, fields] = await db.query('select * from projects where id=?', [post]);
  let gallery = JSON.parse(rows[0].gallery);

  gallery = gallery.filter((img) => {
    return img != src;
  })

  await db.query('update projects set gallery=?', [JSON.stringify(gallery)])

  res.redirect(`/project/edit/${post}`);
}