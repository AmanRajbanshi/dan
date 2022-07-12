const router = require("express").Router();
const SignIn = require("../controllers/signInController");

router.post("/signin", SignIn.Post_SignIn);
router.get('/signin', SignIn.get_SignIn);
router.patch('/signin/:id',SignIn.update_SignIn);
router.delete('/signin/:id',SignIn.delete_SignIn);

module.exports = router;
