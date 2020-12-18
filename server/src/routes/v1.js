const router = require('express').Router()

router.get('', (req, res, next) => {
  res.json({
    message: `serving on ${req.url}`
  })
  next()
})

module.exports = router
