const express = require('express')
const router = express.Router()

// @route      POST api/contacts
// @desc       get all users contacts
// @access     Private 
router.get('/', (req, res) => {
  res.send('Get all contacts')
});

// @route      POST api/contacts
// @desc       Add new contact
// @access     Private 
router.post('/', (req, res) => {
  res.send('Add contacts')
});

// @route      PUT api/contacts/:id
// @desc       Update Contact 
// @access     Private 
router.put('/:id', (req, res) => {
  res.send('Update contacts')
});

// @route      DELETE api/contacts/:id
// @desc       Delete Contact 
// @access     Private 
router.delete('/:id', (req, res) => {
  res.send('Delete contacts')
});

module.exports = router