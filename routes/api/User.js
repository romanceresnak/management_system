const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../databaseModels/User");
const validationLoginInput = require("../validation/login_validation");

router.get("/usertest", (req, res) => res.json({ msg: "Room works" }));

//@route  POST api/user/register
//@desc   Register user
//@access Public
router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    password: req.body.password,
    company: req.body.company
  });

  newUser.save().then(post => res.json(post));
});

//@route  GET api/user/get
//@desc   Login user
//@access Public
router.post("/login", (req, res) => {
  const { isValid } = validationLoginInput(req.body);
  const { errors } = validationLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const name = req.body.name;
  User.findOne({ name }).then(user => {
    if (!user) {
      console.log(user);
      return res.status(400).json({ msg: "Nenasiel sa dany pouzivatel" });
    } else {
      console.log(user);
      return res.status(404).json({ msg: "Nasiel sa pouzivatel" });
    }
  });
});

module.exports = router;
