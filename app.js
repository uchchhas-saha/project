import express from "express";
import morgan from "morgan";
import expressLayout from "express-ejs-layouts";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import flush from "connect-flash";


const app = express();
const PORT = 5000 ;

import mainRoutes from "./server/routes/main.routes.js"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(express.static("public"));
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(flush());
app.use(morgan("dev"));


app.use("",mainRoutes);
app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, async () => {
  
  console.log(`server is running on port http://localhost:${PORT}`);
});