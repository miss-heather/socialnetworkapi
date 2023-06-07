const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  updateUser,
  removeFriend,
} = require('../../connections/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)

// /api/students/:studentId/assignments
// router.route('/:userId/friends').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend)

module.exports = router;