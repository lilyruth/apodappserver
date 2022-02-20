const express = require('express');
const router = express.Router();
const needle = require('needle');

// Env variable
const BASE_URL = process.env.BASE_URL;
const API_NAME = process.env.API_NAME;
const API_KEY = process.env.API_KEY;

router.get('/', async (req, res) => {

 try {
  const apiRes = await needle('get', `${BASE_URL}?${API_NAME}=${API_KEY}&count=8`);

  const data = apiRes.body;
 
  res.status(200).json(data);
 } 
 catch (error) {
  res.status(500).json({error})
 }
 
})

module.exports = router;