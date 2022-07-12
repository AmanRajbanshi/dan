const router = require("express").Router();
const Contact = require("../controllers/contactcontroller");

router.post("/contact", Contact.Post_Contact);
router.get('/contact', Contact.get_Contact);
router.patch('/contact/:id',Contact.update_Contact);
router.delete('/contact/:id',Contact.delete_Contact);

module.exports = router;
