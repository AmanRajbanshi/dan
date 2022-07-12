const router = require("express").Router();
const Review = require("../controllers/reviewController");

router.post("/review", Review.Post_Review);
router.get('/review', Review.get_Review);
router.patch('/review/:id',Review.update_Review);
router.delete('/review/:id',Review.delete_Review);

module.exports = router;
