const router = require('express')()
const config = require('../config/config')
const packageJSON = require('../../package')

router.get('/health', (req, res) => {
    res.status(200).send({
        appName: packageJSON.name,
        version: packageJSON.version,
        status: 'Running'
    })
})
module.exports = router