const express = require("express");
const router = express.Router();
const Project = require("../../databaseModels/Project");

router.get("/test", (req, res) => res.json({ msg: "Project test work" }));

module.exports = router;
