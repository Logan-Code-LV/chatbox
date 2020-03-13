const router = require("express").Router()

router.get("/charlie", (req, res, next) => {
  res.json({
    charlie: "darkness"
  })
})

module.exports = router
