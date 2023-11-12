const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Database = require("@replit/database");
const db = new Database();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const loggedIn = req.cookies.loggedIn;
  const username = req.cookies.username;
  if (loggedIn === "true") {
    db.list().then(keys => {
      if (keys.includes(username)) {
        res.render("loggedin.html", { username: username });
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("notloggedin.html");
  }
});

app.get("/login", (req, res) => {
  const loggedIn = req.cookies.loggedIn;
  if (loggedIn === "true") {
    res.redirect("/");
  } else {
    res.render("login.html");
  }
});

app.get("/signup", (req, res) => {
  const loggedIn = req.cookies.loggedIn;
  if (loggedIn === "true") {
    res.redirect("/");
  } else {
    res.render("signup.html");
  }
});

app.post("/loginsubmit", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.list().then(keys => {
    if (keys.includes(username)) {
      db.get(username).then(value => {
        if (password === value) {
          res.cookie("loggedIn", "true");
          res.cookie("username", username);
          console.log("logged in successfully");
          res.redirect("/");
        } else {
          res.send("Wrong password.");
        }
      });
    } else {
      res.send("Account not found.");
    }
  });
});

app.post("/createaccount", (req, res) => {
  const newusername = req.body.newusername;
  const newpassword = req.body.newpassword;
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const cap_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const allchars = [...letters, ...cap_letters, ...numbers, '_'];
  let goodusername = true;
  for (const i of newusername) {
    if (!allchars.includes(i)) {
      goodusername = false;
    }
  }
  if (goodusername) {
    db.list().then(keys => {
      if (keys.includes(newusername)) {
        res.send("Username taken.");
      } else if (newusername === "") {
        res.send("Please enter a username.");
      } else if (newpassword === "") {
        res.send("Please enter a password.");
      } else {
        db.set(newusername, newpassword).then(() => console.log("new account created"));
        res.cookie("loggedIn", "true");
        res.cookie("username", newusername);
        res.redirect("/");
      }
    });
  } else {
    res.send("Username can only contain alphanumeric characters and underscores.");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("loggedIn", "false");
  res.clearCookie("username");
  res.redirect("/");
  console.log("successfully logged out");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
