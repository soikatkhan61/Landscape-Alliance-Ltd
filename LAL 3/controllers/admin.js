const db = require('../config/db')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

exports.createPostGetController = (req, res)=>{
  res.render("./admin/create-post", {project: undefined});
}

exports.createPostPostController = async (req, res)=>{
  console.log("edit here")
  const {title, description, status, google_map,youtube_video, address, apartment_size, road_size, parking, land_size, units, floors, handover_time} = req.body;
  const edit = req.query?.edit?? false;
  const id = req.query?.id;

  // const $ = cheerio.load("<div><img src='img1'/></div>");
  const $ = cheerio.load(description);

  let postImages = [];
  for(img of $('img')){
    const imgName = img.attribs['data-filename'];
    const src = img.attribs.src;
    const base64ImageArr = src.split(';base64,');
    if(base64ImageArr.length < 2){
      postImages.push(path.basename(src));
      continue;
    }
    const base64Image = base64ImageArr.pop();
    const imgNewName = 'post' + '-' + Date.now() + path.extname(imgName);
    postImages.push(imgNewName);
    fs.writeFile(`public/upload/projects/${imgNewName}`, base64Image, {encoding: 'base64'}, function(err) {
      console.log('File created');
    });

    img.attribs.src = 'http://localhost:3000/upload/projects/' + imgNewName;
  }

  const thumbnail = req.files.thumbnail ? req.files.thumbnail[0].filename : '';
  const prjectImages = req.files['project-images'] || [];

  let projectImagesUrl = [];
  prjectImages.forEach(file =>{
    projectImagesUrl.push(file.filename);
  })


  let sql = `insert into projects (title, description, thumbnail, gallery, post_images, status, google_map,youtube_video, address, apartment_size, road_size, parking, land_size, units, floors, handover_time) values('${title}', '${$('body').html()}', '${thumbnail}', '${JSON.stringify(projectImagesUrl)}', '${JSON.stringify(postImages)}', '${status}', '${google_map}', '${youtube_video}', '${address}', '${apartment_size}', '${road_size}', '${parking}', '${land_size}', '${units}', '${floors}', '${handover_time}')`;

  if(edit){
    const [rows, field] = await db.query(`select thumbnail, gallery, post_images from projects where id=${id}`)
    const oldPostImages = JSON.parse(rows[0].post_images);
    const oldThumbnail = rows[0].thumbnail
    const oldProjectImages = JSON.parse(rows[0].gallery)
    
    async function deleteOldImages(){
      oldPostImages.forEach(async img => {
        if(!postImages.includes(img)){
          await fs.promises.unlink(`public/upload/projects/${img}`)
        }
      })

      if(thumbnail.length > 0){
        await fs.promises.unlink(`public/upload/projects/${oldThumbnail}`)
      }

      // if(projectImagesUrl.length > 0){
      //   oldProjectImages.forEach( async img => {
      //     if(!projectImagesUrl.includes(img)){
      //       await fs.promises.unlink(`public/upload/projects/${img}`)
      //     }
      //   })
      // }
    }
    deleteOldImages();

    projectImagesUrl = [...oldProjectImages, ...projectImagesUrl];
  }

  if(edit && thumbnail.length > 0 && projectImagesUrl.length > 0){
    sql = `update projects set title='${title}', description='${$('body').html()}', thumbnail='${thumbnail}', gallery='${JSON.stringify(projectImagesUrl)}', post_images='${JSON.stringify(postImages)}', status='${status}', google_map='${google_map}',youtube_video='${youtube_video}', address='${address}', apartment_size='${apartment_size}', road_size='${road_size}', parking='${parking}', land_size='${land_size}', units='${units}', floors='${floors}', handover_time='${handover_time}' where id=${id}`
  }else if(edit && thumbnail.length > 0){
    sql = `update projects set title='${title}', description='${$('body').html()}', thumbnail='${thumbnail}', post_images='${JSON.stringify(postImages)}', status='${status}', google_map='${google_map}',youtube_video='${youtube_video}', address='${address}', apartment_size='${apartment_size}', road_size='${road_size}', parking='${parking}', land_size='${land_size}', units='${units}', floors='${floors}', handover_time='${handover_time}' where id=${id}`
  }else if(edit && projectImagesUrl.length > 0){
    sql = `update projects set title='${title}', description='${$('body').html()}', gallery='${JSON.stringify(projectImagesUrl)}', post_images='${JSON.stringify(postImages)}', status='${status}', google_map='${google_map}',youtube_video='${youtube_video}', address='${address}', apartment_size='${apartment_size}', road_size='${road_size}', parking='${parking}', land_size='${land_size}', units='${units}', floors='${floors}', handover_time='${handover_time}' where id=${id}`
  }else if(edit){
    sql = `update projects set title='${title}', description='${$('body').html()}', post_images='${JSON.stringify(postImages)}', status='${status}', google_map='${google_map}',youtube_video='${youtube_video}', address='${address}', apartment_size='${apartment_size}', road_size='${road_size}', parking='${parking}', land_size='${land_size}', units='${units}', floors='${floors}', handover_time='${handover_time}' where id=${id}`
  }


  const [rows, fields] = await db.query(sql);

  if(edit){
    return res.redirect(`/project/edit/${id}`)
  }

  res.redirect('/admin/create-post')
}


exports.allPostsGetController = async (req, res)=>{

  const [rows, fields] = await db.query("select * from projects");

  res.render("./admin/posts", {projects: rows})
}