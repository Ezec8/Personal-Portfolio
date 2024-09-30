const express = require('express')
const router = express.Router()
const {getProjects} = require('../Controllers/projectController')

// get all projects 
router.get("/", getProjects)

module.exports = router;