const express=require('express')
const { getAllProducts, getProduct } = require('../Controller/productController')
const { register, login} = require('../Controller/userController')
const { addToWishlist, getWishlist } = require('../Controller/wishlistController')
// rout

const router=new express.Router()

router.get('/get-all-products',getAllProducts)

router.get('/get-product/:id',getProduct)

router.post('/add-new-user',register)

router.post('/login',login)

router.post('/user/add-to-wishlist',addToWishlist)

router.get('/user/get-wishlist/:userId',getWishlist)

module.exports=router

// then import to index,js