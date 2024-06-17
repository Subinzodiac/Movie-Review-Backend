const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoute')
const tmdbRoutes = require('./tmdbRoute')
const adminRouters = require('./adminRoutes')

router.use('/user', userRoutes)
router.use('/movie', tmdbRoutes)
router.use('/admin',adminRouters)

module.exports = router;