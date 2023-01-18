const db = require("../../config/dbm1");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

exports.aboutPageEdit = async (req, res, next) => {
  try {
    db.query("select * from profiles", (e, data) => {
      if (e) {
        next(e);
      } else {
        res.render("admin/about", { flashMessage: "", data });
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.renderAddSection = async (req, res, next) => {
  try {
    let edit = req.query.edit;
    let del = req.query.delete;
    let id = req.query.id;

    console.log(edit);
    if (edit == "true") {
      db.query("select * from profiles where id = ?", [id], (e, data) => {
        if (e) {
          next(e);
        } else {
          return res.render("admin/about/add-section", {
            flashMessage: "",
            data,
          });
        }
      });
    } else if (del == "true") {
      db.query("delete from profiles where id = ?", [id], (e, data) => {
        if (e) {
          next(e);
        } else {
          return res.redirect("/admin/about");
        }
      });
    } else {
      res.render("admin/about/add-section", { flashMessage: "", data: "" });
    }
  } catch (error) {
    next(error);
  }
};

exports.addSectionPost = async (req, res, next) => {
  try {
    console.log(req.body);
    let { title, description } = req.body;
    let edit = req.query.edit;
    let id = req.query.id;

    let slug = slugify(title);
    const $ = cheerio.load(description);

    if (edit == "true") {
      db.query(
        "update profiles set  title=? , body=? where id = ?",
        [title, $("body").html(), id],
        (e, data) => {
          if (e) {
            next(e);
          } else {
            return res.redirect(`/admin/about/add-section?edit=true&id=${id}`);
          }
        }
      );
    } else {
      db.query(
        "insert into profiles values(?,?,?,?)",
        [null, title, slug, $("body").html()],
        (e, data) => {
          if (e) {
            next(e);
          } else {
            res.redirect("/admin/about");
          }
        }
      );
    }
  } catch (error) {
    next(error);
  }
};

exports.companyInfo = async (req, res, next) => {
  try {
    db.query("select * from info where id = 1", (e, data) => {
        if (e) {
          next(e);
        } else {
          console.log(data);
          return res.render("admin/about/company-info", {
            flashMessage: "",
            data,
          });
        }
      });
  } catch (error) {
    next(error);
  }
};

exports.companyInfoPost = async (req, res, next) => {
  try {
    let { location, mail, phone } = req.body;

    let create = req.query.create;
    let edit = req.query.edit;

    if (create == "true") {
        db.query(
            "insert into info values(?,?,?,?)",
            [null, location, mail, phone],
            (e, data) => {
              if (e) {
                next(e);
              } else {
                return res.redirect("/admin/info?created=true");
              }
            }
          );
    }
    else if(edit == 'true'){
        db.query(
            "update info set location=?,mail=?,phone=?  where id = 1",
            [location, mail, phone],
            (e, data) => {
              if (e) {
                next(e);
              } else {
                return res.redirect("/admin/info?created=true");
              }
            }
          );
    }
     else {
        res.rediect('/admin/info')
      
    }
  } catch (error) {
    next(error);
  }
};


