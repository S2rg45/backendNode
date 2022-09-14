const express = require('express')
const { config } = require('./config/index')
const path = require("path")
const userRecords = require('./components/UserRecords/routes/api/routeapi')

//app
const app = express()

//middleware
app.use(express.json())
app.use("/static", express.static(path.join(__dirname, "public")));

//apirouter
app.use('/api/rocketfly', userRecords)

//redirect
app.get('/', (req, res) => {
    res.redirect('/api/rocketfly')
})

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log('Api escuchando en el puerto ', app.get('port'))
})