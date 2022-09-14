'use-strict'

exports.success = (err, req, res, message, status) => {
    const statusCode = status || 200
    const statusMessage = message || ''
    const statusErr = err || 'True'
    res.status(statusCode).send({
        error: statusErr,
        body: statusMessage
    })
}

exports.error = (err, req, res, message, status) => {
    const statusCode = status || 500
    const statusMessage = message || 'Internal server error'
    const statusErr = err || 'True'
    res.status(statusCode).send({
        error: statusErr,
        body: statusMessage
    })
}