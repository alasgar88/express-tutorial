const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

// get all people
// router.get('/', getPeople);
// post people
// router.post('/', createPerson);
// put people
// router.put('/:id', updatePerson);
// delete people
// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
