var express = require('express');

var router = express.Router();

router.post("/", (req, res) => {
  console.log("req: " , req.body);
  res.send({"ok": "OKOK"})
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"ok": "!@#"});
});

module.exports = router;