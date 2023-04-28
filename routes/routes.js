// routes/routes.js

const express = require('express');
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/controllers');

// User routes
router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

// Product routes
router.get('/products', getProducts);
router.get('/products/:productId', getProductById);
router.post('/products', createProduct);
router.put('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

// Order routes
router.get('/orders', getOrders);
router.get('/orders/:orderId', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:orderId', updateOrder);
router.delete('/orders/:orderId', deleteOrder);

module.exports = router;
