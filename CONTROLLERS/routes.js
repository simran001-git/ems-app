const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get("/create-user", (req, res) => {
    res.render('addemp');
});

router.post("/save-emp", (req, res) => {
    console.log(req.body)
}
)
module.exports = router;