const { AddOrders, getOrders, incOrders } = require('../Controllers/orderContoller')

const router = require('express').Router()

router.post('/order',AddOrders)

router.post('/getorder',getOrders)

router.put('/order',incOrders)

module.exports = router