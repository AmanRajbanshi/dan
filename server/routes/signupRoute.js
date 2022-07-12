const router = require("express").Router();
const SignUp = require("../controllers/signupController");

router.post("/signup", SignUp.Post_Signup);
router.get('/signup', SignUp.get_Signup);
router.patch('/signup/:id',SignUp.update_Signup);
router.delete('/signup/:id',SignUp.delete_Signup);

module.exports = router;
