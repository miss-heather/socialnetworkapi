const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFreind,
  updateUser,
  removeFreind,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)

// /api/students/:studentId/assignments
router.route('/:userId/freinds').post(addFreind);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/freinds/:freindId').delete(removeFreind);

module.exports = router;