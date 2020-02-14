const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  Actions.get(req.query.data)
  .then(action => {
    console.log(res.data)
    res.status(200).json(action)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Error getting projects' })
  })
})


module.exports = router;