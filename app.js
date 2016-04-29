const express    = require("express");
const app        = express();
const http       = require("http").createServer(app);
const path       = require("path");
const handlebars = require("express-handlebars")

app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.render('index', {});
});
app.get("/coursework", function(req, res){
  res.render('coursework.html', {});
});
app.get("/personal", function(req, res){
  res.render('personal.html', {});
});
app.get("/projects", function(req, res){
  res.render('projects.html', {});
});
app.get("/currentwork", function(req, res){
  res.render('currentwork.html', {});
});

http.listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});
