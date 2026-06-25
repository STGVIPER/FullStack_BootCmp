const express = require("express");
console.log(express,"Express module");
const app = express();
console.log(app,"App module");

app.get("/", (req, res) => {
    //console.log(req,"Request object");
    //console.log(res,"Response object");
    res.send("This is a home page ");
});
app.get("/about", (req, res) => {
    res.send("This is an about page ");
});

app.get("/contact", (req, res) => {
    res.send("This is a contact page ");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



















